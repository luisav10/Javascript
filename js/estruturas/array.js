// Vetor array (lista ordenada em uma só variável)
let frutas = ['banana', 'abacaxi', 'maçã'] //sempre começa do 0!!
                                          //ou seja, banana) 0; abacaxi) 1; maçã) 2;

// Acessar um elemento (índice)
frutas[0] //banana

// Descobrir o nº total de elementos de um array (LENGTH)
let totalFrutas = frutas.length

let ultimoIndice = frutas[frutas.length - 1] //diz o último elemento do array
console.log(ultimoIndice) //maçã

// Alterar / adicionar um elemento
frutas[1] = 'morango' // -> banana, morango, maçã

frutas[3] = 'uva' // banana, morango, maçã, uva

// Manipular o final (PUSH/POP)
let cores = ['azul', 'amarelo', 'branco']
cores.push('verde', 'preto') //adicionou verde e preto (azul, amarelo, branco, verde, preto)

let corRemovida = cores.pop() //removeu preto

// Manipular o começo (UNSHIFT/SHIFT)
let nomes = ['ana', 'joão', 'maria']
nomes.unshift('marta') //adicionou marta (marta, ana, joão, maria)

let nomeDefinitivo = nomes.shift() //removeu marta
console.log('primeiro nome: ' + nomeDefinitivo)
console.log('fila de nomes: ' + nomes)

// Array + for (mostra todos os elementos do array)
let nota = [6, 8, 9, 10]

for (let i = 0; i < nota.length; i++) {
    console.log(nota[i])
}

// Exemplo
let notas = [5, 7.8, 9, 10, 9.4]
let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i] //soma = soma + notas[i]
}

let media = soma / notas.length