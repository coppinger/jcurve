<script>
	import { draw } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	let condition;

	onMount(() => {
		condition = true;
	});
</script>

<svg width="106" height="60" viewBox="0 0 106 60" fill="none" xmlns="http://www.w3.org/2000/svg">
	{#if condition}
		<path
			transition:draw={{ duration: 3000, delay: 3000, easing: quintIn }}
			d="M18.75 44.25C18.75 44.25 53 96.25 94.75 1"
			stroke="black"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<line
			x1="4.37114e-08"
			y1="42.5"
			x2="106"
			y2="42.5"
			stroke="black"
			stroke-opacity="0.32"
			stroke-dasharray="3 3"
		/>
	{/if}
</svg>
