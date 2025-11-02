// Estrutura if else (SE/SENÃO)
if (condicao){
    //se condicao = true, executa esse codigo
} else {
    //se condicao = false, ignora o primeiro codigo e executa esse
}

// Exemplo
let idade = Number(prompt('Digite a sua idade: '))

if (idade >= 18){
    console.log('Você é maior de idade. Permitido')
} else {
    console.log('Você é menor de idade. Não permitido')
}

// if else aninhado (EVITAR O USO)
let login = true
let admin = false

if (login === true){
    console.log('Usuário está logado. Verificando permissões...')

    if (admin === true){
        console.log('Encaminhando para o painel de administrador')
    } else {
        console.log('Encaminhando para o painel de usuário')
    }
} else {
    console.log('Login não existente')
}

// Estrutura else if (mais de uma opção)
if (condicao1){
    //bloco 1
} else if (condicao2){
    //bloco 2
} else{
    //bloco 3
}

// Exemplo
let nota = parseFloat(prompt('Digite a sua nota: '))

if (nota >= 9){
    console.log('MB: muito bom')
} else if (nota >= 7){
    console.log('B: bom')
} else if (nota >= 5){
    console.log('R: regular')
} else{
    console.log('I: insuficiente')
}