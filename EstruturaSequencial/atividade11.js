// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

const prompt = require('prompt-sync')()

const altura = Number(prompt('Digite sua altura para o cálculo do peso: '))

const calculo = (72.7 * altura) - 58

console.log(`Seu peso ideal é: ${calculo.toFixed(2)}`)