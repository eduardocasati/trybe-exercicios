/* Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime quem é a mais nova. Exiba no seguinte formato:
"Pessoa" é a mais nova. */

let marina = 55;
let silvia = 45;
let iza = 30;

if (marina < silvia && marina < iza) {
    console.log('Marina é a mais nova.');
} else if (silvia < marina && silvia < iza) {
    console.log('Silvia é a mais nova');
} else {
    console.log('Iza é a mais nova');
}