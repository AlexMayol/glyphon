type TextContainerTag = 'a' | 'abbr' | 'address' | 'b' | 'bdi' | 'bdo' | 'blockquote' | 'caption' | 'cite' | 'code' | 'del' | 'dfn' | 'div' | 'em' | 'figcaption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'i' | 'ins' | 'kbd' | 'label' | 'legend' | 'li' | 'mark' | 'p' | 'pre' | 'q' | 's' | 'samp' | 'small' | 'span' | 'strong' | 'sub' | 'sup' | 'td' | 'th' | 'u' | 'var';
type Options = {
    iterationsPerGlyph?: number;
    speed?: number;
    glyphs?: string;
};
type Props = {
    as?: TextContainerTag;
    options?: Options;
    alphabet?: string;
    mode?: 'onhover' | 'onmount';
    text: string;
    [key: string]: unknown;
};
export declare const defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export declare const Glyphon: ({ as, options, mode, text, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
