let numeros = [];

let soma = 0;

quantidadeDeNumeros = parseInt(prompt("Digite quantos números vocês quer somar: "))

for (let i = 0; i < quantidadeDeNumeros; i++) {
    numeros[i] = parseFloat(prompt(`Digite o ${i+1}º número: `))
    soma += numeros[i];
}

alert(`A soma dos números é ${soma}.`)

console.log(numeros)
