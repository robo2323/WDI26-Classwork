const Allergens = function(total) {
  this.foods = {
    1: 'eggs',
    2: 'peanuts',
    4: 'shellfish',
    8: 'strawberries',
    16: 'tomatoes',
    32: 'chocolate',
    64: 'pollen',
    128: 'cats'
  };
  this.total = total;
  this.scores = [1, 2, 4, 8, 16, 32, 64, 128].reverse();

  this.findAllergens = function() {
    const a = this.scores.find((score) => this.total / score >= 1);
    b = this.total - a;
    foodsFound = [];
    this.foods[b] && foodsFound.push(this.foods[b]);
    foodsFound.push(this.foods[a]);
    return foodsFound;
  };
};

const tomsAllergens = new Allergens(5);

tomsAllergens.findAllergens();
console.log(tomsAllergens.findAllergens());

// console.log([1, 2, 3, 4, 5].find((item) => item > 2));
