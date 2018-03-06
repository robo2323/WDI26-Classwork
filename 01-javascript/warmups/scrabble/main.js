let scrabble = {
  // transform - imverse for keys:values (arrays)
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['k'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],

  transformObj: function() {
    const newObj = {};
    for (let i = 1; i < 11; i++) {
      if (i !== 6 && i !== 7 && i !== 9) {
        for (let c = 0; c < this[i].length; c++) {
          newObj[this[i][c]] = i;
        }
      }
    }
    return newObj;
  },

  calcScore: function(word) {
    word = word.toUpperCase().split('');
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += this.transformObj()[word[i]];
    }
    return score;
  }
};

console.log(scrabble.calcScore('word'));
