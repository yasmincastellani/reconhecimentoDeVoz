const menorValor = 10
const maiorValor = 1000
const numeroSorteado = geraNumeroSorteado()

function geraNumeroSorteado() {
    let maiorValorarredondado = maiorValor + 1
    return parseInt(Math.random() * (maiorValorarredondado - menorValor) + menorValor)
}

console.log(`Número sorteado: ${numeroSorteado}`)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor