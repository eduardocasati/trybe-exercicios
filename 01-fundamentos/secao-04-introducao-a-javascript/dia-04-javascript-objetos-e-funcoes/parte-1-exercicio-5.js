// Acesse a chave `medals`, usando a sintaxe `meuObjeto.chave`, e faça um `console.log` no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');