<script>
	export let type
</script>

<div class="info-bar">
	<span class="material-icons-outlined"> {type} </span>
	<div class="info-bar__text">
		<slot />
	</div>
</div>

<style>
	.info-bar {
		display: flex;
		align-items: flex-start;

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;

		padding: 1rem;

		gap: 0.5rem;

		width: 100%;
		background: #ff23232f;
	}

	.info-bar span {
		font-size: 2rem;
		color: rgb(214, 29, 29);
	}
</style>
