let salarioBruto = 1600;

let parcelaINSS;
let parcelaIR;

//IF da aliquota do INNS
if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    parcelaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1156.95 && salarioBruto <= 2594.92) {
    parcelaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    parcelaINSS = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.82) {
    parcelaINSS = 570.88;
} else {
    console.log("Valor do salário bruto inválido!")
}

//IF da aliquota do IR
if (salarioBruto > 0 && salarioBruto <= 1903.98) {
    parcelaIR = 0;
} else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    parcelaIR = salarioBruto * 0.075;
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    parcelaIR = salarioBruto * 0.15;
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    parcelaIR = salarioBruto * 0.225;
} else if (salarioBruto >= 4664.68) {
    parcelaIR = salarioBruto * 0.275;
} else {
    console.log("Valor do salário bruto inválido!")
}

let salarioLiquido;

console.log(salarioBruto);
console.log(parcelaINSS);
console.log(parcelaIR);