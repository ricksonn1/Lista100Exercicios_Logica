//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const prompt = require('prompt-sync')()

const valor = Number(prompt('Digite um número: '))

if(valor < 0) {
    console.log(`O número digitado é negativo: ${valor}`)
} else {
    console.log(`O número digitado é positivo: ${valor}`)
}