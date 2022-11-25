let array = [];

for (index = 1; index <= 25; index += 1) {
    array.push(index);
}

console.log(array);

// Utilizando o array que criou no exercício 1.8, imprima o resultado da divisão de cada um dos elementos por 2.

let divisionResult;

for (count = 0; count < array.length; count += 1) {
    divisionResult = array[count] / 2;
    console.log(divisionResult);
}