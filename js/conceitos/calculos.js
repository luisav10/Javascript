// Variáveis de referência
let num1 = 10
let num2 = 4
let contador = 2

// Soma (+)
let soma = num1 + num2 

contador += 3 //soma +3 ao contador (fica 5)
contador++ //soma +1 ao contador (fica 6)

// Subtração (-)
let subtracao = num1 - num2

contador -= 3 //subtrai -3 do contador (fica -1)
contador-- //subtrai -1 do contador (fica -2)

// Multiplicação (*)
let multiplicacao = num1 * num2

// Divisão (/)
let divisao = num1 / num2

// Módulo (resto da divisão - %)
let resto = num1 % num2 //sobra 0 = par
                       //sobra 1 = ímpar

// Potenciação (**)
let potencia = num1 ** 2 // 10 elevado a 2

// Biblioteca Math
let base = 81
let raizQuadrada = Math.sqrt(base) //fica 9

console.log('Valor de PI: ', Math.PI)