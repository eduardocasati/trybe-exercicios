/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let paginasLivro = 208;
let paginasLidas = 4;
let minutos = 2;

let minutosTotais = paginasLivro / paginasLidas * minutos;

console.log('Ana levará', minutosTotais, 'minutos para ler o livro todo.');