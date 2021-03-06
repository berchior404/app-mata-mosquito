var largura = 0
var altura = 0
var vidas = 1
var tempo = 60
var criador = 0
var nivel = window.location.search.replace('?', '')

if (nivel === 'normal') {
    criador = 1000
} else if (nivel === 'dificil') {
    criador = 750
} else if (nivel === 'deus') {
    criador = 500
}

function ajustarTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight
}

ajustarTamanho()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(mosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000);

function posicaoAleatoria() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas < 4) {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        } else {
            window.location.href = 'fim_de_jogo.html'
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}