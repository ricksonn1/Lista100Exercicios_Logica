//Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require('prompt-sync')();

const raio = Number(prompt('Digite o raio do circulo: '));

const somaDaArea = 3.14 * Math.pow(raio,2);

console.log(`A soma da area do circulo é: ${somaDaArea}`);