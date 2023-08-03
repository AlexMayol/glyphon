<script lang="ts">
	import { onMount } from 'svelte';

	export let mode: 'onmount' | 'onhover' = 'onhover';
	export let text: string;
	export let alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	export let as: string = 'span';
	export let id: string = `glyphon-effect-${text}`;
	const defaultOptions = {
		iterationsPerGlyph: 3,
		speed: 30,
		glyphs: alphabet
	};
	export let options = defaultOptions;

	const {
		glyphs = defaultOptions.glyphs,
		iterationsPerGlyph = defaultOptions.iterationsPerGlyph,
		speed = defaultOptions.speed
	} = options;

	const randomLetter = (alphabet: string[]) =>
		alphabet[Math.floor(Math.random() * alphabet.length)];

	let hasEffectFinished = true;

	let finalAlphabet: string[] = [...new Set(glyphs)];

	let result = text;

	let interval: NodeJS.Timer;
	let intervals: NodeJS.Timer[] = [];
	let iteration = 0;

	const onFinishEffect = () => {
		hasEffectFinished = true;
		intervals.forEach((interval) => clearInterval(interval));
	};

	const onMouseOverEffect = () => {
		if (!hasEffectFinished) return;
		iteration = 0;
		hasEffectFinished = false;

		clearInterval(interval);

		interval = setInterval(() => {
			result = text
				.split('')
				.map((_, index) => {
					if (index < iteration) {
						if (text[index] === ' ') return ' ';
						return text[index];
					}

					return randomLetter(finalAlphabet);
				})
				.join('');

			if (iteration >= text.length) {
				onFinishEffect();
			}

			iteration += 1 / iterationsPerGlyph;
		}, speed);

		intervals.push(interval);
	};

	const onMountEffect = () => {
		if (!hasEffectFinished) return;
		iteration = 0;
		interval = setInterval(() => {
			result = text
				.split('')
				.map((_, index) => {
					if (index < iteration) {
						if (text[index] === ' ') return ' ';
						return text[index];
					}
					return randomLetter(finalAlphabet);
				})
				.join('');

			if (iteration >= text.length) {
				onFinishEffect();
			}
			iteration += 1 / iterationsPerGlyph;
		}, speed);
		intervals.push(interval);
	};
	onMount(() => {
		const element = document.getElementById(id);
		if (!element) return;

		if (mode === 'onhover') {
			element.onmouseover = onMouseOverEffect;
		}
		if (mode === 'onmount') {
			element.onmouseover = onMountEffect;
		}
	});
</script>

<svelte:element this={as} {id}>{result}</svelte:element>
