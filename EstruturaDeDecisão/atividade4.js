//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

const prompt = require('prompt-sync')()

const letra = String(prompt('Digite uma letra para saber se é vogal ou consoante: '))

if(letra.toLowerCase('A') === 'a' || letra.toLowerCase('E') === 'e' || letra.toLowerCase('I') === 'i' || letra.toLowerCase('O') === 'o' || letra.toLowerCase('U') === 'u') {
    console.log('Você digitou uma vogal!')
} else {
    console.log('Você digitou uma consoante')
}