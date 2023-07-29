import type { Meta, StoryObj } from '@storybook/react';

import { Glyphon } from '../Glyphon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Glyphon',
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
    // speed: { control: 'number' },
    // mode: { control: 'radio', options: ['onhover', 'onmount'] },
    alphabet: { control: 'text', defaultValue: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
  },
} satisfies Meta<typeof Glyphon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'La pepecion',
    mode: 'onmount',
  },
};

