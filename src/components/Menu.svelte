<script>
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';

	const page = getContext('page');

	function handleKeydown(e) {
		if (e.key == 'ArrowLeft' && !isFirstPage) previousPage();
		if (e.key == 'ArrowRight' && !isLastPage) nextPage();
		if (e.key == 'Escape') goHome();
	}

	const isFirstPage = $page.pageNum <= 0;
	const isLastPage = $page.pageNum >= $page.maxCurrentPage;

	const nextPage = () => ($page.pageNum += 1);
	const previousPage = () => ($page.pageNum -= 1);
	const goHome = () => goto('/');
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="buttons">
	<button on:click={previousPage} class="previous-page" disabled={isFirstPage}>
		<span class="material-icons"> arrow_back </span>
	</button>
	<button on:click={goHome}><span class="material-icons"> home </span></button>
	<button on:click={nextPage} disabled={isLastPage}>
		<span class="material-icons"> arrow_forward </span>
	</button>
</div>

<style>
	.buttons {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		margin: 1rem;
	}

	.buttons button {
		display: flex;

		background: none;
		border: 0;
		opacity: .8;
	}

	.buttons button:hover {
		opacity: 1;
	}
</style>
