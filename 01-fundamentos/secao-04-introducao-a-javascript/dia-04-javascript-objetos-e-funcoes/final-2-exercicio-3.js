function bigger (array) {

    let biggerValue = 0;

    for (let key in array) {
        if (array[key] < biggerValue) {
            biggerValue = key;
        } else {
            biggerValue = biggerValue;
        }
    }

    return 'O índice do maior número é ' + biggerValue;

}

console.log(bigger([2, 4, 6, 7, 10, 0, -3]));