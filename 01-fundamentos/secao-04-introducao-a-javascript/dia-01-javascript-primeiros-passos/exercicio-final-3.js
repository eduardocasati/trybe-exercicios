let number1 = 10;
let number2 = 20;
let number3 = 30;

console.log("O número um é:", number1, "| O número dois é:", number2, "| O número três é", number3);

if (number1 < number2 && number1 < number3) {
    console.log("O número um é o menor dos três números.");
} else if (number2 < number1 && number2 < number3) {
    console.log("O número dois é o menor dos três números.");
} else {
    console.log("O número três é o menor dos três números.");
}

