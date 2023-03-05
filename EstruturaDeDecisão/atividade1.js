//Faça um Programa que peça dois números e imprima o maior deles.

const prompt = require('prompt-sync')()

const primeiroNumero = Number(prompt('Digite um número: '))
const segundoNumero = Number(prompt('Digite outro número: '))

if(primeiroNumero > segundoNumero) {
    console.log(`O primeiro número digitado é o maior: ${primeiroNumero}`)
} else {
    console.log(`O segundo número digitado é o maior: ${segundoNumero}`)
}