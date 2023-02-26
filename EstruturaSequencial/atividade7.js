//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

const prompt  = require('prompt-sync')();

const base = Number(prompt('Digite sua base para o calculo:'))
const altura = Number(prompt('Digite sua altura para o calculo: '))

const calculo = (base * altura) * 2;

console.log(`A área do quadrado com o dobro é: ${calculo}`)
