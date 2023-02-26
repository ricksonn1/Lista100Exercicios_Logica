// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da 
// tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de 
// latas de tinta a serem compradas e o preço total.

const prompt = require('prompt-sync')()

const metrosQuadrados = Number(prompt('Digite o tamanho dos metros quadrados: '))

const litros = metrosQuadrados / 3

if(metrosQuadrados % 54 == 0) {
    let latas = metrosQuadrados / 54
} else {
    latas = (metrosQuadrados / 54) + 1
}

const preco = latas * 80

console.log(`Serão compradas ${latas.toFixed(0)} latas`)
console.log(`E o valor total fica: R$ ${preco.toFixed(2)}`)