// Declarar / chamar uma função
function nomeFuncao(){
    //bloco de código
}

nomeFuncao() //chamando função

//Variavel de esecopo global / local
let global = 'fora' //existe fora e dentro de funções (pode ter apenas 1 c/ esse nome)
console.log(global)

function acessarVariavel(){
    let local = 'dentro' //existe só dentro dessa função (pode ter mais variáveis locais c/ esse nome)

    console.log(local)
    console.log(global)
}