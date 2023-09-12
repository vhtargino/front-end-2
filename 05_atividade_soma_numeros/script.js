// Interação com o usuário para perguntar quantos números e adicioná-los em um array
let numeros = [];
let quantidadeDeNumeros = parseInt(prompt("Digite quantos números vocês quer somar: "));

for (let i = 0; i < quantidadeDeNumeros; i++) {
    numeros[i] = parseFloat(prompt(`Digite o ${i+1}º número: `));
}

// A função recebe um array como parâmetro e soma os números contidos nele
function somar(array) {
    let soma = 0;
    for (i in array) {
        soma += array[i];
    }
    return soma;
}

// Resultado
alert(somar(numeros));
