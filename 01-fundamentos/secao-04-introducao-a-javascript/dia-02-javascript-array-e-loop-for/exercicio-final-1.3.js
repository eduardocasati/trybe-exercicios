let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Calcule e imprima a média aritmética dos valores contidos no array;
//      A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let sum = 0;
let arithmeticAverage = 0;

for (index = 0;  index < numbers.length; index += 1) {
    sum = sum + numbers[index];
}

arithmeticAverage = sum / numbers.length;

console.log(arithmeticAverage);

