//Faça um Programa que leia três números e mostre o maior deles.

const prompt = require('prompt-sync')()

const primeiroNumero = Number(prompt('Digite o primeiro número: '))
const segundoNumero = Number(prompt('Digite o segundo número: '))
const terceiroNumero = Number(prompt('Digite o terceiro número: '))

if(primeiroNumero > segundoNumero || primeiroNumero > terceiroNumero) {
    console.log(`Primeiro número é o maior de todos: ${primeiroNumero}`)
} else if(segundoNumero > primeiroNumero || segundoNumero > terceiroNumero){
    console.log(`Segundo número é o maior de todos: ${segundoNumero}`)
} else if(terceiroNumero > primeiroNumero || terceiroNumero > segundoNumero) {
    console.log(`Terceiro número é o maior de todos: ${terceiroNumero}`)
}