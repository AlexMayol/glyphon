import { useEffect, useState, useRef } from "react";

export const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ "

type Props = {
    id?: string;
    alphabet?: string;
    mode?: 'onhover' | 'onmount'
    text: string;
    speed?: number;
    [key: string]: any;
}

export const Glyphon = ({ id, alphabet = defaultAlphabet, mode = 'onhover', text, speed = 50, ...rest }: Props) => {
    const interval = useRef<number>();

    const hasFinished = useRef(false);
    const iteration = useRef(0);
    const finalAlphabet = [...new Set(alphabet)];
    const alphabetLength = finalAlphabet.length;

    const [result, setResult] = useState<string>(text);

    const randomLetter = () => finalAlphabet[Math.floor(Math.random() * alphabetLength)];

    const onHoverEffect = () => {
        if (!hasFinished.current) return
        iteration.current = 0;


        interval.current = setInterval(() => {
            setResult(result =>
                result.split("").map((_, index) => {
                    if (index < iteration.current) {
                        if (text[index] === ' ') return ' '
                        return text[index];
                    }
                    return randomLetter()
                }).join("")
            )

            if (iteration.current >= text.length) {
                clearInterval(interval.current);
            }
            iteration.current += 1 / 2;

        }, speed);
    }
    useEffect(() => {
        const el = document?.getElementById?.(id || `glyph-effect-${text}`);
        if (!el) return;

        if (mode === 'onhover') {
            el.onmouseover = onHoverEffect
        }

        if (mode === 'onmount') {
            console.log(1111)
            if (!hasFinished.current) return
            iteration.current = 0;
            console.log('2')
            interval.current = setInterval(() => {
                setResult(result =>
                    result.split("").map((_, index) => {
                        if (index < iteration.current) {
                            if (text[index] === ' ') return ' '
                            return text[index];
                        }
                        return randomLetter()
                    }).join("")
                )

                if (iteration.current >= text.length) {
                    clearInterval(interval.current);
                }
                iteration.current += 1 / 2;


            }, speed);
        }


    }, [])

    useEffect(() => {
        if (result === text) {
            hasFinished.current = true;
            clearInterval(interval);
        }
    }, [result])

    return (
        <span id={id || `glyph-effect-${text}`} {...rest}>
            {result}
        </span>
    )
}
