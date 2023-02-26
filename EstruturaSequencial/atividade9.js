// //Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

const prompt = require('prompt-sync')()

const grausF = Number(prompt('Digite a temperatura para o calculo: '))

const calculo = (5 * (grausF-32) /9)

console.log(`Em graus Celsius fica: ${calculo} C`)
