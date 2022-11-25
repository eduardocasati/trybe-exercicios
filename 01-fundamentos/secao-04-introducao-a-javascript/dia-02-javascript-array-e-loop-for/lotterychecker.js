// Vamos desenvolver um algoritmo em JavaScript que verifica se a pessoa ganhou na Mega-Sena.
// Para isso:
// - A pessoa marca 6 números
// - Uma sequência de 6 números é sorteada nesse mesmo intervalo.
// - Se os números forem correspondentes.

// Math.floor(Math.random()) * 60) + 1;

// Jogo feito
const gabrielGame = [8, 22, 26, 37, 42, 60];

console.log('Números escolhidos:', gabrielGame);

// Jogo Sorteado
const megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
    megaSenaNumbers.push(Math.floor(Math.random() * 60) + 1);
}

console.log('Números sorteados:', megaSenaNumbers);

// Variável que conta quantos acertos aconteceram
let numberOfHits = 0;

// Checa se os números são correspondentes


console.log('Número de acertos:', numberOfHits);