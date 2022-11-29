let word = 'tryber';
let newWord = '';

for (index = word.length - 1; index <= word.length && index >= 0; index -= 1) {
    newWord = newWord + word[index];
}

console.log(newWord);