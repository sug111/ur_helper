<script>
    export let cards
</script>

<div class="cards">
	{#each cards as card}
        <a href="{card.url}">
            <h3>{card.title}</h3>
            <img src="{card.image}" alt="{card.title}">
        </a>
    {/each}
</div>

<style>
	:root {
		--font-size: 2rem;
	}

	.cards {
		display: grid;
		align-self: center;
		justify-content: center;
        align-content: center;
		align-items: center;
		grid-template-columns: repeat(2, minmax(430px, 850px));
		grid-auto-rows: minmax(430px, 500px);

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		padding: 1.5rem;
		height: 100%;
		gap: 1.5rem;
	}

	.cards a {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		text-align: center;

		width: 100%;
		height: 100%;
		border: none;
		transition: 0.2s;

		text-decoration: none;
		color: #fff;
		font-size: var(--font-size);

		background-repeat: no-repeat;
		background-size: cover;
	}

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    h3 {
        z-index: 1;
        position: absolute;
    }

	a:hover {
		font-size: calc(var(--font-size) * 1.2);
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
		opacity: 0.5;
	}

	a:hover::after {
		opacity: 0.8;
	}

	@media (max-width: 800px) {
		.cards {
			grid-template-columns: minmax(430px, 850px);
			padding: 1.5rem 0;
		}
	}
</style>
