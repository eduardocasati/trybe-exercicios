function biggerName (array) {

    let name = array[0];

    for (let key in array) {

        if (name.length < array[key].length) {
            name = array[key];
        }

    }

    return name;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));