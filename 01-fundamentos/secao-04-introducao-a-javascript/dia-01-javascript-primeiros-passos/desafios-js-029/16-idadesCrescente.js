//Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime as idades em ordem crescente.

let marina = 36;
let silvia = 42;
let iza = 19;

if (marina < silvia && marina < iza && silvia < iza) {
    console.log(marina, silvia, iza);
} else
    if (marina < silvia && marina < iza && iza < silvia) {
        console.log(marina, iza, silvia);
    }
    else
        if (silvia < iza && silvia < marina && iza < marina) {
            console.log(silvia, iza, marina);
    }
    else
        if (silvia < iza && silvia < marina && marina < iza) {
            console.log(silvia, marina, iza);
        }
        else
            if (iza < marina && iza < silvia && marina < silvia) {
                console.log(iza, marina, silvia);
            }
            else {
                console.log(iza, silvia, marina);

            }