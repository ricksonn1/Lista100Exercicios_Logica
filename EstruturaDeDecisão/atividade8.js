// Faça um programa que pergunte o preço de três produtos e informe qual 
// produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

const prompt = require('prompt-sync')()

const primeiroPreço = Number(prompt('Digite o preço do primeiro produto: '))
const segundoPreço = Number(prompt('Digite o preço do segundo produto: '))
const terceiroPreço = Number(prompt('Digite o preço do terceiro produto: '))

if (primeiroPreço < segundoPreço && primeiroPreço < terceiroPreço) {
    console.log(`Compre o mais barato: R$ ${primeiroPreço.toFixed(2)}`)
}
else if (segundoPreço < primeiroPreço && segundoPreço < terceiroPreço) {
    console.log(`Compre o mais barato: R$ ${segundoPreço.toFixed(2)}`)
} else if (terceiroPreço < primeiroPreço && terceiroPreço < segundoPreço) {
    console.log(`Compre o mais barato: R$ ${terceiroPreço.toFixed(2)}`)
}