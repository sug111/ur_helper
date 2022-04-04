<script>
	// @ts-nocheck
	import index from './pages/index.md';
	import step_1 from "./pages/step_1.md";
	import step_2 from "./pages/step_2.md";
	import step_3 from "./pages/step_3.md";
	import step_4 from "./pages/step_4.md";

	import { getContext } from 'svelte';

	const page = getContext('page');
	const pages = [index, step_1, step_2, step_3, step_4];

	$page.maxCurrentPage = pages.length - 1;
</script>

<svelte:component this={pages[$page.pageNum]} /> 
