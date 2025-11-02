// Variáveis de referência
let num1 = 10
let num2 = 15
let num3 = 10

let a = 20
let b = '20'

// Operadores relaconais (comparação)
console.log(num1 > num2) //false
console.log(num1 < num2) //true
console.log(num1 >= num3) //true
console.log(num2 <= num3) //false

// Igualdade
console.log(a == b) //true: ignora o tipo da variável (EVITAR USAR)
console.log(a === b) //false: pois uma é string e a outra é number

//Diferença
console.log(a != b) //false (EVITAR USAR)
console.log(a !== b) //true

// && (E/AND): ambos precisam ser true
let idade = 25
let carteira = true
let podeDirigir = (idade >= 18) && (carteira === true) //ambos true, então: true

// || (OU/OR): apenas um precisa ser true
let ingresso = false
let vip = true
let podeEntrar = ingresso || vip //temos pelo menos um true, então: true

// ! (NÃO/NOT): inverte o valor da boolean
let chuva = true
let vouSair = !chuva //era true, então virou false