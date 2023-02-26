// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

const prompt = require('prompt-sync')()

const altura = Number(prompt('Digite sua altura: '))

const calculoHomem = (72.7*altura) -58
const calculoMulher = (62.1*altura) -44.7

console.log(`Se você for homem seu peso ideial é: ${calculoHomem.toFixed(2)}`)
console.log(`Se você for mulher seu peso ideal é: ${calculoMulher.toFixed(2)}`)