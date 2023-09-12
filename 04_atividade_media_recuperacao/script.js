let notas = [];

for (let i = 0; i < 3; i++) {
    notas[i] = parseFloat(prompt(`Digite a ${i+1}ª nota: `));
}

let media = (notas[0] + notas[1] + notas[2])/3;

if (media <= 4) {
    alert(`Aluno reprovado. Média: ${media}.`);
}
else if (media > 4 && media < 7) {
    let notaRecuperacao = prompt(`Aluno em recuperação. Média: ${media.toFixed(1)}. Digite a nota da recuperação: `);
    let mediaRecuperacao = (media + parseFloat(notaRecuperacao))/2;
    if (mediaRecuperacao < 5) {
        alert(`Aluno reprovado após a recuperação. Média: ${mediaRecuperacao.toFixed(1)}.`);
    }
    else {
        alert(`Aluno aprovado após a recuperação. Média: ${mediaRecuperacao.toFixed(1)}`);
    }
}
else {
    alert(`Aluno aprovado. Média: ${media.toFixed(1)}.`);
}