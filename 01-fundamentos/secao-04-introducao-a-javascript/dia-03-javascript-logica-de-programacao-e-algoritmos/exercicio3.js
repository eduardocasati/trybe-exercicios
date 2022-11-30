let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallestWord = array[0];

for (index = 0; index < array.length; index += 1) {

    if (biggerWord.length < array[index].length) {
        biggerWord = array[index];
    } else {
        biggerWord = biggerWord;
    }

    if (smallestWord.length > array[index].length) {
        smallestWord = array[index];
    } else {
        smallestWord = smallestWord;
    }

}

console.log('A maior palavra é', biggerWord);
console.log('A menor palavra é', smallestWord);