let alturasGeral = [];
let alturasHomens = [];
let generos = [];
let totalMulheres = 0;

for(let i = 0; i < 5; i++) {
    let genero = prompt("Digite seu gênero (H ou M): ");
    generos.push(genero);
    let altura = prompt("Digite sua altura (em cm): ");
    if(genero == "h" || genero == "H") {
        alturasHomens.push(parseInt(altura));
    }
    else if(genero == "m" || genero == "M") {
        totalMulheres++;
    }
    alturasGeral.push(parseInt(altura));
}

alturasGeral.sort();
let pessoaMaisBaixa = alturasGeral[0]/100;
let pessoaMaisAlta = alturasGeral[alturasGeral.length - 1]/100;
console.log(`A pessoa mais baixa tem ${pessoaMaisBaixa.toFixed(2)}m. A mais alta tem ${pessoaMaisAlta.toFixed(2)}m.`);

let somaHomens = 0;

for(let i = 0; i < alturasHomens.length; i++) {
    if (alturasHomens) {
        somaHomens += parseFloat(alturasHomens[i]);
    }
}

if(alturasHomens.length > 0) {
    let mediaHomens = (somaHomens / alturasHomens.length) / 100;
    console.log(`A média da altura dos homens é ${mediaHomens.toFixed(2)}m.`);
} else {
    console.log("Nenhum homem identificado.");
}

console.log(`Total de mulheres: ${totalMulheres}.`);
