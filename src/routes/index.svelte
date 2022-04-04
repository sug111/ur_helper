<script>
	import { getContext, onMount } from 'svelte';

	const page = getContext('page');

	onMount(() => {
		$page.currentPage = null;
		$page.pageNum = 0;
	});
</script>

<main>
	<div class="cards">
		<a href="ip" class="ip">
			<span>Индивидуальный <br /> предприниматель</span>
		</a>
		<a href="self" class="self"> <span>Самозянятый</span> </a>
		<a href="ur" class="ur"> <span>Юредичесткое лицо</span> </a>
		<a href="map" class="map"> <span>Карты</span> </a>
	</div>
</main>

<style>
	:root {
		--font-size: 2rem;
	}

	.cards {
		display: grid;
		align-self: center;
		justify-content: center;
		align-items: center;
		grid-template-columns: 1fr 1fr;

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		padding: 1.5rem;
		height: 100%;
		gap: 1.5rem;
	}

	a {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		max-height: 380px;
		border: none;
		transition: 0.2s;

		text-decoration: none;
		color: #fff;
		font-size: var(--font-size);

		background-repeat: no-repeat;
		background-size: cover;

		aspect-ratio: 16 / 9;
	}

	a span {
		z-index: 10;
	}

	a:hover {
		font-size: calc(var(--font-size) * 1.2);
	}

	a::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: black;
		transition: 0.2s;
		opacity: 0.5;
	}

	a:hover::before {
		opacity: 0.8;
	}

	.ip {
		background-image: url('/ur_helper/img/ip.jpg');
		justify-self: end;
		align-self: end;
	}

	.self {
		background-image: url('/ur_helper/img/self.jpg');
		align-self: end;
	}

	.ur {
		background-image: url('/ur_helper/img/ur.jpg');
		justify-self: end;
		align-self: start;
	}

	.map {
		background-image: url('/ur_helper/img/map.jpg');
		align-self: start;
	}

	@media (max-width: 800px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}
</style>
