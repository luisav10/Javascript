// Tipos de variáveis!!

// String (texto)
let string = 'Hobi'

let stringNum = 7
let stringTexto = String(stringNum) //converteu number p/ string
//o prompt sempre volta em string!!!

// Number (número)
let numero = 7

let numTexto = '7'
let numNumero = Number(numTexto) //converteu string p/ number

let numeroDecimal = 3.14
console.log('numero 3.14 sem decimal: ', parseInt(numeroDecimal)) //mostra somente 3
console.log('numero 3.14 com decimal: ', parseFloat(numeroDecimal)) //mostra 3.14

// Boolean (lógica de true/false)
let boolean = true

//Verificar o tipo de variável (Typeof)
let musica = 'DNA'
console.log('A variável música é do tipo: ', typeof musica) //mostra "string"