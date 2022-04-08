<script>
	// @ts-nocheck
	import About from './about.md';
	import { getContext } from 'svelte';

	const page = getContext('page');

	$page.maxCurrentPage = 0;
</script>

<About/>

<a href="/ur_helper/">На главную</a>

<style>
	a {
		text-align: center;
		margin: 1rem 0;
	}
</style>