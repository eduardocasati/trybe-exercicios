let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smallestNumber = numbers[0];
let compareNumber;

for (index = 0; index < numbers.length; index += 1) {
    compareNumber = numbers[index];

    if (compareNumber < smallestNumber) {
        smallestNumber = compareNumber;
    }
}

console.log(smallestNumber);