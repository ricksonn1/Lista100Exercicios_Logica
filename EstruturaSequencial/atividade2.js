//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

const prompt = require('prompt-sync')();

const mensagem = prompt('Digite um número: ');

console.log(`O número digitado foi ${mensagem}`);