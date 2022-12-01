function verificaPalindrome(word) {

    console.log(word.length);

    for(index in word) {
      if(word[index] != word[(word.length - 1) - index]) {
        return false;
      }
    }
    return true;

  }

console.log(verificaPalindrome('arara'));