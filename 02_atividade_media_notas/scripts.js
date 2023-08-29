/*
Você precisa desenvolver um pequeno programa para calcular a média de um aluno.
Diante desse cenário, solicite ao usuário três valores de notas. Para cálculo da média,
considere que a primeira nota tem peso 2, a segunda tem peso 3 e a terceira tem peso 5.
*/

let flag = true;

do {
    alert(`Você deve digitar 3 notas:

    - A primeira terá peso 2
    - A segunda terá peso 3
    - A terceira terá peso 5`);

    let nota1 = prompt("Digite a primeira nota: ");
    let nota2 = prompt("Digite a segunda nota: ");
    let nota3 = prompt("Digite a terceira nota: ");

    let media = ((3 * parseFloat(nota1)) + (2 * parseFloat(nota2)) + (5 * parseFloat(nota3))) / (2 + 3 + 5);

    if (media >= 0){
        alert(`A média do aluno é ${media}`);
    }
    else {
        alert("Algo foi digitado incorretamente.")
    }

    if (media < 7) {
        alert("Aluno reprovado por média.");
    }
    else if (media >= 7) {
        alert("Aluno aprovado por média.");
    }
    else {
        alert("Dados inválidos.");
    }

    let pergunta = prompt("Deseja digitar outras notas? [S/N]");

    if (pergunta == "S" || pergunta == "s") {
        flag = true;
    }
    else if (pergunta == "N" || pergunta == "n") {
        flag = false;
    }
    else {
        flag = false;
    }

} while(flag);
