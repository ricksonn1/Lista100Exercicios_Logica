//Faça um Programa que peça dois números e imprima a soma.

const prompt = require('prompt-sync')();

const numero1 = Number(prompt('Digite um número: '));
const numero2 = Number(prompt('Digite outro número: '))

console.log(`A soma dos números é: ${numero1 + numero2}`)