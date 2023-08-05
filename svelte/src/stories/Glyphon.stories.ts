import type { Meta, StoryObj } from '@storybook/svelte';

import Glyphon from '../lib/Glyphon.svelte';

const meta = {
	title: 'Glyphon Svelte',
	component: Glyphon,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Glyphon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnHover: Story = {
	args: {
		text: 'Glyphon effect'
	}
};

export const OnMount: Story = {
	args: {
		text: 'Glyphon effect can run also when component mounts',
		mode: 'onmount'
	}
};
export const CustomCSS: Story = {
	args: {
		text: 'Hacker effect looks pretty cool',
		style:
			'font-family:monospace;color: #00e300; border-radius: .5rem; background-color: black; padding: .5rem'
	}
};
