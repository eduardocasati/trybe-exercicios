let numbers = [5, 9, 3, 19, 70, 8, 97, 2, 35, 27];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let oddNumberCounter = 0;
let compareNumber;

for (index = 0; index < numbers.length; index += 1) {
    compareNumber = numbers[index];

    if (compareNumber % 2 == 1) {
        oddNumberCounter += 1;
    }
}

console.log(oddNumberCounter);