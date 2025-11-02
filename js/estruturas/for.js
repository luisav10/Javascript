// Estrutura for (PARA): dividido em ponto inicial, condição e incremento final
for (let i = 0; i < 5; i++) {
    // 1) 'let i = 0': cria a variável i, com valor 0
    // 2) 'i < 5': irá repetir o laço até i ser menor que 5
    // 3) 'i++': i adiciona mais um a cada vez que o código é executado (para parar quando i >= 5)
}

// Exemplo: contagem regressiva
for (let i = 5; i >= 1; i--) {
    console.log(i) //5, 4, 3, 2, 1
}

// Exemplo: 2 em 2
for (let i = 0; i <= 10; i += 2) {
    console.log(i) //0, 2, 4, 6, 8, 10
    
}

// Exemplo: tabuada
let numTabuada = Number(prompt('Digite o número da tabuada que você deseja: '))

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    let resultado = numTabuada * multiplicador
    console.log(numTabuada + ' X ' + multiplicador + ' = ' + resultado)
    
}