/* 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
números pares e a quantidade de números ímpares. */

let num;
// let lista = [];
let par = 0;
let impar = 0;

for (let i = 0; i < 10; i++) {
    num = parseFloat(prompt(`Digite um número: `))
    // lista.push(num);
    if (num % 2 == 0) {
        par++;
    }
    else {
        impar++;
    }
}

// console.log(lista);

console.log(`Quantidade de números pares: ${par}.
Quantidade de números ímpares: ${impar}.`)
