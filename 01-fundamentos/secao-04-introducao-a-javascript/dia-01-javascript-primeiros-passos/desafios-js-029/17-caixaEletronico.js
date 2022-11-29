/* Um grande banco lhe contratou para fazer um programa para gerenciar um caixa eletrônico. As máquinas deste banco só possuem notas de R$10, R$50 e R$100.
Para fazer este programa funcionar você deve coletar o saldo da pessoa e qual o valor do saque que ela quer fazer.
Se o valor passado no saque for zero exiba a mensagem: "Valor de saque inválido".
Se o saque for maior que o saldo, exiba a mensagem: "Saldo insuficiente".
É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico. Caso o valor não se encaixe nas possibilidades, exiba a mensagem: "Valor inválido para as notas disponíveis: R$10, R$50, R$100".
Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e exiba a mensagem: "Saque efetuado! Novo saldo: R$30". */

let saque = 500;
let saldo = 600;
let novoSaldo;

if (saque == 0) {
    console.log('Valor de saque inválido.')
} else
    if (saque > saldo) {
        console.log('Saldo insuficiente');
    }
    else
        if (saque % 10 != 0) {
                console.log('Valor inválido para as notas disponíveis: R$10, R$50, R$100.')
        }
        else
            if (saque <= saldo) {
                novoSaldo = saldo - saque;
                console.log('Saque efetuado! Novo saldo: R$', novoSaldo);
            }