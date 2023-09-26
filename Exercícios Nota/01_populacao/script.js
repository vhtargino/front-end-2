/* 1) Supondo que a população de um país A seja da ordem de 80000 habitantes com 
uma taxa anual de crescimento de 3% e que a população de B seja 200000 
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que 
calcule e escreva o número de anos necessários para que a população do país A 
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. */

let habitantesA = 80000;
let habitantesB = 200000;
let anos = 0;

console.log(`População inicial do país A: ${habitantesA}.`)
console.log(`População inicial do país B: ${habitantesB}.`)

do {
    habitantesA = habitantesA + (habitantesA * 0.03);
    habitantesB = habitantesB + (habitantesB * 0.015);
    anos = anos + 1;
/*     console.log(`Habitantes A: ${parseInt(habitantesA)}`)
    console.log(`Habitantes B: ${parseInt(habitantesB)}`)
    console.log(`Anos: ${anos}`) */
} while (habitantesA < habitantesB)

console.log(`População atual do país A: ${parseInt(habitantesA)}.`)
console.log(`População atual do país B: ${parseInt(habitantesB)}.`)
console.log(`Total de anos até a população do país A ultrapassar a do país B: ${anos}.`)
