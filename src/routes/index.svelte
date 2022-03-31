<script>
	import { getContext, onMount } from 'svelte';

	const page = getContext('page');

	onMount(() => {
		$page.currentPage = null;
		$page.pageNum = 0;
	});
</script>

<main>
	<h1 class="title">Помощник регистрации, я...</h1>

	<div class="cards">
		<a href="/индивидуальный_предприниматель" class="ip">
			<img src="/img/ip.jpg" alt="Индивидуальный предприниматель" />
			<!-- Индивидуальный предпрениматель -->
		</a>
		<a href="/самозанятый" class="self">
			<img src="/img/self.jpg" alt="" />
			<!-- Самозянятый -->
		</a>
		<a href="/юридическое_лицо" class="ur">
			<img src="/img/ur.jpg" alt="" />
			<!-- Юредичесткое лицо -->
		</a>
	</div>
</main>

<style>
	main {
		text-align: center;
	}

	.cards {
		padding: 2em 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
	}

	a {
		display: block;
		position: relative;
		height: 270px;
		border: none;
		transition: 0.2s;
	}

	a::before {
		content: '';
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		color: #fff;
		transition: 0.4s;
		font-size: 2rem;
		z-index: 10;
	}

	a:hover::before {
		font-size: 2.5rem;
	}

	.ip::before {
		content: 'индивидуальный предприниматель';
	}

	.self::before {
		content: 'самозанятый';
	}

	.ur::before {
		content: 'юридическое лицо';
	}

	a::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: black;
		transition: 0.2s;
		opacity: .5;
	}

	a:hover::after {
		opacity: .8;
	}

	/* a::after {
		content: '';
		position: absolute;
		z-index: 10;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		content: '';
		background: black;
		opacity: 0;
		transition: 0.2s;
	}

	a::before {
		content: '';
		position: absolute;
		z-index: 10;
		width: 100%;
		height: 100%;
		color: #fff;
	}

	a:hover::before {
		opacity: 0.6;
	} */

	a img {
		object-fit: cover;
		height: 100%;
	}
</style>
