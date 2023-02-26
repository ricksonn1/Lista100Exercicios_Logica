// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são 
// descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quanto pagou ao sindicato.
// o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo:
// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$

const prompt = require('prompt-sync')()

const ganhoPorHora = Number(prompt('Quanto você ganha por hora? '))
const horasTrabalhadas  = Number(prompt('Quantas horas você trabalha por mês? '))

const salarioBruto = ganhoPorHora * horasTrabalhadas

const iR = salarioBruto * (11/100)
const inss = salarioBruto * (8/100)
const sindicato = salarioBruto * (5/100)
const salarioLiquido = (salarioBruto - iR - inss - sindicato)

console.log(`\n+ Salário Bruto: R$${salarioBruto.toFixed(1)}`)
console.log(`- IR (11%): R$${iR.toFixed(1)}`)
console.log(`- INSS (8%): R$${inss.toFixed(1)}`)
console.log(`- SINDICATO (5%): R$${sindicato.toFixed(1)}`)
console.log(`= Salário Liquido: R$${salarioLiquido.toFixed(1)}`)