import { useEffect, useState, useRef } from "react";

export const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

type Options = {
    iterationsPerGlyph?: number;
    speed?: number;
    glyphs?: string;
}
type Props = {
    id?: string;
    options?: Options;
    alphabet?: string;
    mode?: 'onhover' | 'onmount'
    text: string;
    [key: string]: unknown;
}

const defaultOptions = {
    iterationsPerGlyph: 3,
    speed: 50,
    glyphs: defaultAlphabet
}

const randomLetter = (alphabet: string[]) => alphabet[Math.floor(Math.random() * alphabet.length)];

export const Glyphon = ({ id, options = defaultOptions, mode = 'onhover', text, ...rest }: Props) => {
    const { glyphs = defaultOptions.glyphs, iterationsPerGlyph = defaultOptions.iterationsPerGlyph, speed = defaultOptions.speed } = options
    const interval = useRef<NodeJS.Timer>();
    const intervals = useRef<NodeJS.Timer[]>([]);

    const hasFinished = useRef(true);
    const iteration = useRef(0);
    const finalAlphabet = [...new Set(glyphs)];

    const [result, setResult] = useState<string>(text);

    const onHoverEffect = () => {
        if (!hasFinished.current) return
        iteration.current = 0;
        hasFinished.current = false

        interval.current = setInterval(() => {
            setResult(result =>
                result.split("").map((_, index) => {
                    if (index < iteration.current) {
                        if (text[index] === ' ') return ' '
                        return text[index];
                    }
                    return randomLetter(finalAlphabet)
                }).join("")
            );

            if (iteration.current >= text.length) {
                onFinishEffect()
            }
            iteration.current += 1 / iterationsPerGlyph;

        }, speed);
        intervals.current.push(interval.current)
    }

    const onMountEffect = () => {
        if (!hasFinished.current) return
        iteration.current = 0;
        interval.current = setInterval(() => {
            setResult(result =>
                result.split("").map((_, index) => {
                    if (index < iteration.current) {
                        if (text[index] === ' ') return ' '
                        return text[index];
                    }
                    return randomLetter(finalAlphabet)
                }).join("")
            )

            if (iteration.current >= text.length) {
                onFinishEffect()
            }
            iteration.current += 1 / iterationsPerGlyph;


        }, speed);
        intervals.current.push(interval.current)
    }

    const onFinishEffect = () => {
        hasFinished.current = true;
        intervals.current.forEach(interval => clearInterval(interval))
    }

    useEffect(() => {
        const el = document?.getElementById?.(id || `glyph-effect-${text}`);
        if (!el) return;

        if (mode === 'onhover') {
            el.onmouseover = onHoverEffect
        }
        if (mode === 'onmount') {
            el.onmouseover = onMountEffect
        }
    })

    return (
        <span id={id || `glyph-effect-${text}`} {...rest}>
            {result}
        </span>
    )
}
