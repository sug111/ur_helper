<script>
	import { getContext } from 'svelte';

	const page = getContext('page');

	$: currentProgress = $page.pageNum / ($page.maxCurrentPage / 100);
</script>

<div class="progress-bar" style:opacity={$page.currentPage ? "1" : "0"}>
	<div class="progress" style:width={`${currentProgress}%`} />
</div>

<style>
	.progress-bar {
		width: 100%;
		height: 5px;
		background: rgb(192, 192, 192);
	}

	.progress {
		transition: 0.5s;
		height: 5px;
		background: rgb(50, 11, 68);
	}
</style>
