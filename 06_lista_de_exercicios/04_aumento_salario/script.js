/* 4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
dobro do percentual do ano anterior. Faça um programa que determine o 
salário atual desse funcionário. Após concluir isto, altere o programa 
permitindo que o usuário digite o salário inicial do funcionário. */

let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let taxa = 0.015;
let ano = 1995;

console.log(`Salário inicial em 1995: R$${salario}.`);

do {
    ano++;
    salario = salario + (salario * taxa);
    taxa *= 2;
} while (ano <= 2023)

console.log(`Salário atual em 2023: R$${salario}`);
