const substituaX = nome => {

    const frase = 'Tryber x aqui!';
    let letter = frase.split('');
    let novaFrase = `Tryber ${nome} aqui!`;
    
    return console.log(novaFrase);
}

substituaX('Eduardo');

const minhasSkills = substituaX => {

    const skills = ['HTML', 'CSS', 'JavaScript'];

    let funcoesConcatenadas = (`${substituaX}
    Minhs três principais habilidades são:
    - ${skills[0]}
    - ${skills[1]}
    - ${skills[2]}`);

    return console.log(funcoesConcatenadas);
}

minhasSkills();