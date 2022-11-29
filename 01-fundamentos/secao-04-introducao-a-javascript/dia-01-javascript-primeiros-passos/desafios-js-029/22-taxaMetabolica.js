/* Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.
Crie um algoritmo que receba os dados a seguir e, a partir disso, calcula a BMR da pessoa:

Idade: número maior que 0
Sexo: M ou F
Peso (kg): número maior que 0
Altura (cm): numero maior que 0

* Fórmula para homens: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5.
* Fórmula para mulheres: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161.

O retorno deve ser no seguinte formato:
"A taxa metabólica basal é: 1860 Kcal." */

let idade = 26;
let sexo = "f";
let peso = 86;
let altura = 182;

let bmr;

if (sexo == "m") {
    bmr = (altura * 6.25) + (peso * 9.99) - (idade * 4.92) + 5;
    console.log('A taxa metabólica basal é:', bmr, 'Kcal.');
} else
    if (sexo == "f") {
        bmr = (altura * 6.25) + (peso * 9.99) - (idade * 4.92) - 161;
        console.log('A taxa metabólica basal é:', bmr.toFixed(2), 'Kcal.');
    }