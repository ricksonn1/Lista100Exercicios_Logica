// // Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino 
// ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.


const prompt = require('prompt-sync')()

const turno = prompt('Digite o turno em que você trabalha, M-Matutino, V-Vespertino, N-Noturno: ')

if(turno.toLowerCase('M') === 'm'){
    console.log('Bom Dia!')
}else if(turno.toLowerCase('V') === 'v'){
    console.log('Boa tarde!')
} else if(turno.toLowerCase('N') === 'N'){
    console.log('Boa noite')
} else {
    console.log('Valor inválido!')
}