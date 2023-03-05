//Faça um Programa que leia três números e mostre o maior e o menor deles.

const prompt = require('prompt-sync')()

const numero1 = Number(prompt('Digite o primeiro número: '))
const numero2 = Number(prompt('Digite o segundo número: '))
const numero3 = Number(prompt('Digite o terceiro número: '))

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`O número ${numero1} é o maior`)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O número ${numero2} é ó maior`)
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`O número ${numero3} é o maior`)
}

else if (numero1 < numero2 && numero1 < numero3) {
    console.log(`E o número ${numero1} é o menor`)
}
else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`E o número ${numero2} é o menor`)
}
else if (numero3 < numero1 && numero3 < numero1) {
    console.log(`E o número ${numero3} é o menor`)
}