function compare (num1, num2) {

    if (num1 > num2) {
        return console.log(num1 + ' é maior que ' + num2);
    } else if (num1 === num2) {
        return console.log('Os números são iguais.');
    } else {
        return console.log(num2 + ' é maior que ' + num1);
    }
}