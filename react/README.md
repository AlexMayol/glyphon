# Glyphon

Glyphon is a React component that applies an animation effect to the provided text. It replaces each character in the text with a randomly selected character from a given alphabet, creating an animated glyph effect. The animation can be triggered either on hover or on mount.

Check a [live demo here](https://alexmayol.github.io/glyphon/react/?path=/docs/glyphon-react--docs).

## Install

```bash
npm install @glyphon/react

yarn add @glyphon/react

pnpm add @glyphon/react
```

## Usage

```jsx
import { Glyphon } from '@glyphon/react';



<Glyphon text="Your text here" />

```


## Props

Glyphon accepts the following props:

| Prop       | Type                 | Default                              | Description                                                                                                                                  |
|------------|----------------------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| text       | string (required)    | N/A                                  | The text that will be animated by the glyph effect.                                                                                         |
| as         | string (optional)    | 'span'                               | The HTML tag to be used for the container element.                                                                                          |
| options    | object (optional)    | See below for default options        | An object that allows you to customize the animation behavior.                                                                              |
| alphabet   | string (optional)    | "ABCDEFGHIJKLMNOPQRSTUVWXYZ"        | (Deprecated) A string containing the characters to be used for the animation. Use `options.glyphs` instead.                                  |
| mode       | string (optional)    | 'onhover'                            | The mode in which the animation will be triggered. Possible values: `'onhover'` (animation on hover) or `'onmount'` (animation on component mount). |
| ...rest    | unknown              | N/A                                  | Any additional props valid for the chosen HTML tag (`as`) will be applied to the container element.                                          |

#### Default Options

| Option             | Type                | Default  | Description                                                                                     |
|--------------------|---------------------|----------|-------------------------------------------------------------------------------------------------|
| iterationsPerGlyph | number (optional)   | 3        | The number of iterations each glyph will be shown before moving to the next character.         |
| speed              | number (optional)   | 30       | The speed of the animation, represented in milliseconds.                                       |
| glyphs             | string (optional)   | "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | A string containing the characters from which the random glyphs will be selected. |


## Examples

```jsx
import React from 'react';
import { Glyphon } from 'path/to/Glyphon';

const MyComponent = () => {
  return (
    <div>
      <Glyphon text="Hello, World!" />

      {/* Customizing the animation behavior */}
      <Glyphon text="Custom Speed" options={{ speed: 50 }} />

      {/* Using a different alphabet for the animation */}
      <Glyphon text="Custom Alphabet" options={{ glyphs: "1234567890" }} />

      {/* Starting the animation automatically on mount */}
      <Glyphon text="On Mount Effect" mode="onmount" />
    </div>
  );
};

export default MyComponent;
```

Check more live examples in the [Stroybook documentation.](https://alexmayol.github.io/glyphon/react/?path=/docs/glyphon-react--docs)
