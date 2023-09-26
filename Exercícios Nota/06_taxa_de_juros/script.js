/* 6) Escreva uma função que informe o retorno de um investimento (montante) com 
base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
fornecidos pelo usuário.

Use a fórmula: M = C * (1+i)t

Onde:
▪ C = Capital inicial investido
▪ i = Taxa de juros, em percentual
▪ t = Tempo do investimento, em meses

Exiba o resultado com duas casas decimais.
 */

let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaDeJuros = parseFloat(prompt("Taxa de juros:"))
let meses = parseInt(prompt("Meses:"))

let retorno = capitalInicial