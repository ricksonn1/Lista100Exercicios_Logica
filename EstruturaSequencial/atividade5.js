// Faça um Programa que converta metros para centímetros.


const prompt = require('prompt-sync')();

const converta = Number(prompt('Digite quantos metros deseja converter: '));

console.log(`A conversão fica: ${converta * 100}cm`);