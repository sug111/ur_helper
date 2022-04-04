<script>
	import ProgressBar from './ProgressBar.svelte';
</script>

<header>
	<nav>
		<a href="/ur_helper/">
			<img class="logo" src="img/logo.svg" alt="Мой логотип" />
		</a>

		<a href="https://github.com/sugjo" class="gitlogo">GitHub</a>
	</nav>
	<ProgressBar />
</header>

<style>
	.logo {
		width: auto;
		height: 50px;
	}

	.gitlogo {
		display: inline-block;
		color: #000;
		font-size: 1.5em;
		font-weight: 700;
		text-decoration: none;
	}

	header {
		background-color: #fff;
		position: sticky;
		top: 0px;
		box-shadow: 0px 3px 14px -3px rgba(68, 86, 99, 0.2);
		z-index: 100;
	}

	nav {
		padding: 5px 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
