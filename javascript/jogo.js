var largura = 0
var altura = 0

function ajustarTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(altura, largura)
}

ajustarTamanho()

function posicaoAleatoria() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    document.body.appendChild(mosquito)
}