//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const prompt = require('prompt-sync')()

const sexo = String(prompt('Digite F para feminino ou M para masculino: '))

if(sexo === 'F' || sexo === 'f') {
    console.log(`Sexo Feminino`)
} else if(sexo === 'M' || sexo === 'm') {
    console.log(`Sexo masculino`)
} else {
    console.log(`Sexo inválido`)
}