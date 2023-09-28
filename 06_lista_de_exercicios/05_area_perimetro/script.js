/* 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo 
com o raio fornecido. */

function areaPerimetro(raio) {
    let area = Math.PI * (raio**2);
    let perimetro = 2 * Math.PI * raio;
    return [area, perimetro];
}

let raio = parseFloat(prompt("Digite o raio do círculo:"));

let resultado = areaPerimetro(raio);

console.log(`A área do círculo é ${resultado[0].toFixed(2)}.
O perímetro é ${resultado[1].toFixed(2)}.`);