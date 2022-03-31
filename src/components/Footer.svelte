<footer>
	<div class="footer__block">
		<span>Специальность</span>
		<a class="link" href="https://ukrtb.ru/upload/iblock/ede/wj8xgxezatosps4h665e66q95w5uh7fp.pdf"
			>ИСП</a
		>
	</div>
	<div class="footer__block">
		<span>Разработчик:</span>
		<a class="link" href="https://vk.com/sugjo">Ахмадеев И.A.</a>
	</div>
	<div class="footer__block">
		<span>Научный руководитель</span>
		<a class="link" href="http://gortseva.ru">Горцева Т.Н</a>
	</div>
	<div class="footer__block">
		<span>О нас</span>
		<a class="link" href="##">О проекте</a>
	</div>
</footer>

<style>

	footer {
		display: grid;
		justify-items: center;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 15px;
		background-color: #2e282a;
		color: #fff;
	}

	.footer__block > span {
		display: block;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.footer__block {
		margin: 0 20px;
	}

	.link {
		color: rgb(134, 134, 134);
	}

	.link:hover {
		text-decoration: none;
	}

	@media screen and (max-width: 700px) {
		footer {
			grid-template-columns: 1fr;
			justify-items: start;
		}

		.footer__block > span {
			display: block;
			font-weight: 700;
			margin-bottom: 5px;
		}

		.footer__block {
			margin-bottom: 15px;
		}
	}
</style>
