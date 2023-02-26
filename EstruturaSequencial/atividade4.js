//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const nota3 = Number(prompt('Digite a terceira nota: '));
const nota4 = Number(prompt('Digite a quarta nota: '));

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média da notas é: ${media}`)