<script>
	import { getContext, onMount } from 'svelte';
	import Cards from "../components/Cards.svelte";

	const page = getContext('page');

	onMount(() => {
		$page.currentPage = "";
		$page.pageNum = 0;
	});

	let cards = [
		{
			title: "Индивидуальный предприниматель",
			image: "img/ip.jpg",
			url: "ip",
		},
		{
			title: "Самозянятый",
			image: "img/self.jpg",
			url: "self",
		},
		{
			title: "Юридичесткое лицо",
			image: "img/ur.jpg",
			url: "ur",
		},
		{
			title: "Карты",
			image: "img/map.jpg",
			url: "map",
		},
	]
</script>

<main>
	<Cards {cards}/>
</main>
