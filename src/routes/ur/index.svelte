<script>
	// @ts-nocheck
	import Page1 from './pages/page_1.md';
	import Page2 from './pages/page_2.md';
	import Page3 from './pages/page_3.md';
	import Page4 from './pages/page_4.md';
	import Page5 from './pages/page_5.md';
	import Page6 from './pages/page_6.md';
	import Page7 from './pages/page_7.md';
	import { getContext } from 'svelte';

	const page = getContext('page');
	const pages = [Page1, Page2, Page3, Page4, Page5, Page6, Page7];

	$page.maxCurrentPage = pages.length - 1;
</script>

<svelte:component this={pages[$page.pageNum]} />