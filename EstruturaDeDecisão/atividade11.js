// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.

const prompt = require('prompt-sync')()

const salario = Number(prompt('Digite seu salário para o calculo: '))

if (salario < 280) {
    let novoSalario = salario + (salario * 0.20)
    let valorDoAumento = novoSalario - salario
    console.log(`O salário antes do reajuste é: R$ ${salario.toFixed(2)}`)
    console.log(`Percentual aplicando: 20%`)
    console.log(`O valor do aumento é: R$ ${valorDoAumento.toFixed(2)}`)
    console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`)
} else if(salario > 280 && salario < 700){
    let novoSalario = salario + (salario * 0.15)
    let valorDoAumento = novoSalario - salario
    console.log(`O salário antes do reajuste é: R$ ${salario.toFixed(2)}`)
    console.log(`Percentual aplicando: 15%`)
    console.log(`O valor do aumento é: R$ ${valorDoAumento.toFixed(2)}`)
    console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`)
}
else if(salario > 700 && salario < 1500){
    let novoSalario = salario + (salario * 0.10)
    let valorDoAumento = novoSalario - salario
    console.log(`O salário antes do reajuste é: R$ ${salario.toFixed(2)}`)
    console.log(`Percentual aplicando: 10%`)
    console.log(`O valor do aumento é: R$ ${valorDoAumento.toFixed(2)}`)
    console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`)
} else if(salario > 1500){
    let novoSalario = salario + (salario * 0.05)
    let valorDoAumento = novoSalario - salario
    console.log(`O salário antes do reajuste é: R$ ${salario.toFixed(2)}`)
    console.log(`Percentual aplicando: 5%`)
    console.log(`O valor do aumento é: R$ ${valorDoAumento.toFixed(2)}`)
    console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`)
}