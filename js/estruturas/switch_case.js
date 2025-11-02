// Estrutura switch...case (ESCOLHA/CASO)
switch (key) {
    case value: //case: um caminho possível
        
        break; //break: interrompe a ação e sai do bloco

    default: //default: executado quando nenhum case é true (como o else)
        break;
}

// Exemplo
let opcao = Number(prompt('Escolha um sorvete: 1) chocolate | 2) chocomenta | 3) morango'))

switch (opcao) {
    case 1:
        console.log('Você escolheu chocolate')
        break;

    case 2:
        console.log('Você escolheu chocomenta')
        break;
        
    case 3:
        console.log('Você escolheu morango')
        break;

    default:
        alert('Opção inválida')
        break;
}

// Exemplo fall-through (retira o break para executar mais de um case)
let dia = prompt('Digite um dia da semana (ex: segunda): ')

switch (dia) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
        console.log('Dia de semana: ' + dia)
        break; //se for dia de semana, o código para aqui

    case 'sábado':
    case 'domingo':
        console.log('Fim de semana: ' + dia)
        break;

    default:
        console.log('Digite um dia valido')
        break;
}