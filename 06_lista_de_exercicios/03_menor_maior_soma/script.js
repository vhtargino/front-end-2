/* 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, 
o maior valor e a soma dos valores. */

let numeros = [1, 6, 89, 356, 99, 12, 4, 2];
let soma = 0;
let maisAlto = Math.max(...numeros);
let maisBaixo = Math.min(...numeros);

for (let i = 0; i < numeros.length; i++) {
    soma += parseFloat(numeros[i]);
}

console.log(`O número mais alto é: ${maisAlto}.
O número mais baixo é: ${maisBaixo}.
A soma de todos os números é: ${soma}`)
