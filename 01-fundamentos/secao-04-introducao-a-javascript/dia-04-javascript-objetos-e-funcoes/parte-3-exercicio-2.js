function compare (num1, num2) {

    if (num1 > num2) {
        return num1 + ' é maior que ' + num2;
    } else if (num1 === num2) {
        return 'Os números são iguais.';
    } else {
        return num2 + ' é maior que ' + num1;
    }
}

console.log(compare(56, 89));