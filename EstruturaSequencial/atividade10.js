//Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

const prompt = require('prompt-sync')()

const grausC = Number(prompt('Digite a temperatura para o calculo: '))

const calculo = (grausC * 1.8) + 32;

console.log(`Em graus Fahrenheit fica: ${calculo} F`)