function compare (num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return console.log(num1 + ' é maior que' + num2 + ' e ' + num3);
    } else if (num2 > num1 && num2 > num3) {
        return console.log(num2 + ' é maior que ' + num1 + ' e ' + num3);
    } else if (num3 > num1 && num3 > num2) {
        return console.log(num3 + ' é maior que ' + num1 + ' e ' + num2);
    } else {
        return console.log('Os números são iguais');
    }

}