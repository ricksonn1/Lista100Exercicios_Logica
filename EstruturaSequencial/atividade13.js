// // João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
// Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
// deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
// e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá 
// pagar. Imprima os dados do programa com as mensagens adequadas.

const prompt = require('prompt-sync')()

const peso = Number(prompt('Quantos quilos você comprou João? '))

const excesso = peso - 50

const multa = excesso * 4

console.log(`joão comprou ${peso} quilos, e ultrapassou ${excesso} quilos, e deverá pagar uma multa de: ${multa}`)
