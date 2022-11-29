let number = 10;
let fatorial = 0;

for (index = 9; index > 0; index -= 1) {

    fatorial = number * index;
    number = fatorial;

}

console.log(fatorial);