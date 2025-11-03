// Estrutura while (ENQUANTO)
let contador = 0 //definir antes do laço

while (condition) { //condição
    //bloco de código

    contador++ //atualização, para o código ter um fim 
}

// Exemplo: contadores e acumuladores
let num = 1 //contador
let soma = 0 //acumulador

while (num <= 10) {
    soma = soma + contador

    num++
}

// Exemplo: número de repetições s/definição (repete ate ser true)
let senha = 134340
let tentativa = Number(prompt('Digte sua senha: '))

while (senha !== tentativa) {
    alert('Senha incorreta! tente novamente')
    tentativa = Number(prompt('Digte sua senha: '))
}

console.log('Senha correta!') //saiu da repetição