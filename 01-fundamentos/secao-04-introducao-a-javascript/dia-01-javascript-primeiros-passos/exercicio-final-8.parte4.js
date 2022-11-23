let salarioBruto = 1600;
let salarioLiquido;

let aliquotaINSS;
let aliquotaIR;

//if da aliquota do INNS
if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
} else if (salarioBruto >= 1156.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
} else if (salarioBruto >= 5189.82) {
    aliquotaINSS = 570.88;
} else {
    console.log("Valor inválido!")
}

console.log(salarioBruto);
console.log(aliquotaINSS);