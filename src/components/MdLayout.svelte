<script>
	import { getContext } from 'svelte';
	import Menu from './Menu.svelte';

	export let title;
	export let subTitle;

	const page = getContext('page');
	$page.currentPage = subTitle;
</script>

<main>
	<div class="title">
		<h1>{title}</h1>

		{#if subTitle}
			<h2>{subTitle}</h2>
		{/if}
	</div>

	<section>
		<slot />
	</section>

	<Menu />
</main>

<style>
	h1,
	h2 {
		margin: 0.5rem;
		text-align: center;
	}

	main {
		padding: 2rem;
		max-width: 1200px;
		width: 100%;
		justify-self: center;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		align-items: center;

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>
