/* 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo 
com o raio fornecido. */

let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area = Math.PI * (raio**2);
let perimetro = 2 * Math.PI * raio;

console.log(`A área do círculo é ${area.toFixed(2)}.
O perímetro é ${perimetro.toFixed(2)}.`)
