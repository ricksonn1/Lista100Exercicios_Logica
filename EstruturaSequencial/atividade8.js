//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const prompt = require('prompt-sync')()

const ganhoPorHora = Number(prompt('Quanto você ganha por hora trabalha? '))
const numeroDehoras = Number(prompt('Quantas horas você trabalha no mês? '))

const calculo = ganhoPorHora * numeroDehoras

console.log(`Seu sálario no mês é: ${calculo}`)
