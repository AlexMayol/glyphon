import type { Meta, StoryObj } from '@storybook/svelte';

import Glyphon from '../lib/Glyphon.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Glyphon Svelte',
	component: Glyphon,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Glyphon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		text: 'Glyphon effect'
	}
};
