/* Desenvolva um programa para que a pessoa possa escolher um filme para assistir no Netflix. 
Apresente as opções de filmes e peça para escolher uma opção.
Ex: 
Opção 1: SENHOR DOS ANEIS
Opção 2: VIUVA NEGRA
Opção 3: ESQUADRAO SUICIDA
Opção 4: MATRIX 4 

DICA: Utilize Switch/Case.
*/

let filme = 2;

switch (filme) {
    case 1:
        console.log('Você escolheu O Senhor dos Anéis.');
        break;
    case 2:
        console.log('Você escolheu Viúva Negra.');
        break;
    case 3:
        console.log('Você escolheu Esquadrão Suicida.');
        break;
    case 4:
        console.log('Você escolheu Matrix 4.');
        break;
    default:
        console.log('Não temos este filme no nosso catálogo.')
        break;
}