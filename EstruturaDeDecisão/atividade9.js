// Faça um Programa que leia três números e mostre-os em ordem decrescente.

const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite o primeiro número: '))
const numero2 = Number(prompt('Digite o segundo número: '))
const numero3 = Number(prompt('Digite o terceiro número: '))

const array = [numero1, numero2, numero3]

array.sort((numero1, numero2) => {
    if (numero1 < numero2) return numero1
    if (numero1 > numero2) return -numero1
    return 0
})

console.log(array)