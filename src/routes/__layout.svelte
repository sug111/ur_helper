<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import { setContext } from 'svelte';
	import { page } from '../store/page.store';

	setContext('page', page);
</script>

<svelte:head>
	<title>
		Юридический помощник {$page.currentPage ? `- ${$page.currentPage?.toLowerCase()}` : ''}
	</title>
</svelte:head>

<Header />

<slot />

<Footer />
