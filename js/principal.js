let banners = ['Do lixo ao luxo!', 'Reaproveitaar é aproveitar!']
let bannerAtual = 0

function trocaBanner(index) {
	bannerAtual = index || 0
	document.getElementById('mensagem').textContent = banners[bannerAtual]
}

setInterval(() => {
	bannerAtual = (bannerAtual + 1) % 2
	trocaBanner(bannerAtual)
},2000)

