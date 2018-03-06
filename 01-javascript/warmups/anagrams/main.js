const anagrams = {
  list: ['enlists', 'google', 'inlets', 'banana'],

  detectAnagram: function(word) {
    const wordSorted = this.sortWord(word);

    for (let i = 0; i < this.list.length; i++) {
      if (word === this.list[i]) {
        return false;
      }
      if (wordSorted === this.sortWord(this.list[i])) {
        return true;
      }
    }
    return false;
  },
  sortWord: function(word) {
    return word
      .split('')
      .sort((a, b) => a > b)
      .join('');
  }
};

console.log(anagrams.detectAnagram('ooggle'));
