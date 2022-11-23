const cost = 100;
const value = 230;

let profit = value - (cost * 0.2 + cost);

console.log(profit);

if (cost < 0 || value < 0) {
    console.log("ERRO: valor(es) inválido(s)!");
}