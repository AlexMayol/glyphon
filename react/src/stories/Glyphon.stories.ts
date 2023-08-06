import type { Meta, StoryObj } from '@storybook/react';

import { Glyphon } from '../Glyphon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Glyphon React',
  component: Glyphon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof Glyphon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Glyphon effect',
  },
};

export const CustomCSS: Story = {
  args: {
    text: 'Apply any CSS style to the component',
    style: {
      color: '#1bec1b',
      backgroundColor: 'black',
      fontFamily: 'monospace',
      padding: '.5rem',
      borderRadius: '.5rem',
    }
  },
};

export const LowSpeed: Story = {
  args: {
    text: 'I change slowly',
    options: {
      speed: 100,
    }
  },
};

export const HighSpeed: Story = {
  args: {
    text: 'I change fast!',
    options: {
      speed: 10,
    }
  },
};

export const MoreIterations: Story = {
  args: {
    text: 'You can change the number of iterations per character',
    options: {
      iterationsPerGlyph: 6,
    }
  },
};

export const MonospaceFont: Story = {
  args: {
    text: 'Monospace fonts help to keep the effect aligned',
    style: {
      fontFamily: 'monospace',
    }
  },
};

export const AsOtherHTMLElements: Story = {
  args: {
    text: 'This is an H1 tag',
    as: 'h1',
  },
};

