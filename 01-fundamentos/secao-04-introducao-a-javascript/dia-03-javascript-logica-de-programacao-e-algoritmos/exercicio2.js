let word = 'tryber';
let letter = '';
let newWord = '';

for (index = word.length - 1; index <= word.length && index >= 0; index -= 1) {
    letter = word[index];

    newWord = newWord + word[index];
}

console.log(newWord);