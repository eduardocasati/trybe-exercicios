let statusPessoa;
let message;

statusPessoa = "reprovada";

switch (statusPessoa) {
    case 'aprovada':
        message = "Parabéns, você foi aprovada(o)!";
        break;

    case 'lista':
        message = "Você está na nossa lista de espera";
        break;

    case 'reprovada':
        message = "Você foi reprovada(o)";
        break;

    default:
        message = "Informação incorreta";
}

console.log(message);