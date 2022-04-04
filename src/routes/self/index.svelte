<script>
	// @ts-nocheck
	import Page1 from './pages/page_1.md';
	import Page2 from './pages/page_2.md';
	import { getContext } from 'svelte';

	const page = getContext('page');
	const pages = [Page1, Page2];

	$page.maxCurrentPage = pages.length - 1;
</script>

<svelte:component this={pages[$page.pageNum]} />