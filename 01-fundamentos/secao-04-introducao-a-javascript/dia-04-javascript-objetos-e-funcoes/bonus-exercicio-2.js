// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (vector) {
    
    let array = [];

    for (index = 0; index < vector.length; index += 1) {
        if (vector[index] % 2 === 0) {
            array.push(vector[index]);
        }
    }

    return array;

}

console.log(arrayOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));