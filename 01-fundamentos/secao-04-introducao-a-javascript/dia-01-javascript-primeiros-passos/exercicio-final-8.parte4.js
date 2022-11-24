let salarioBruto = 2500;

let parcelaINSS;
let parcelaIR;

//IF da parcela do INNS
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

//cálculo dedução do INSS
let salarioBase = salarioBruto - parcelaINSS;

//IF da parcela do IR
if (salarioBase > 0 && salarioBase <= 1903.98) {
    parcelaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    parcelaIR = salarioBase * 0.075;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    parcelaIR = salarioBase * 0.15;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    parcelaIR = salarioBase * 0.225;
} else if (salarioBase >= 4664.68) {
    parcelaIR = salarioBase * 0.275;
} else {
    console.log("Valor do salário bruto inválido!")
}

//calculo salário final
let salarioLiquido = salarioBase - parcelaIR;

//saída
console.log("O salário bruto é: R$", salarioBruto.toFixed(2));
console.log("O valor do INSS a ser deduzido é: R$", parcelaINSS.toFixed(2));
console.log("O salário base é: R$", salarioBase.toFixed(2));
console.log("O valor do IR a ser deduzido é: R$", parcelaIR.toFixed(2));
console.log("O salário líquido é: R$", salarioLiquido.toFixed(2));