// factories (objects and functions)

// Factory
const catFactory = function(name, age = '?', furColor = '?') {
  if (name && (!isNaN(age) || age === '?')) {
    return {
      name,
      age,
      furColor,
      meow: function() {
        return `${this.name}: Meow!`;
      }
    };
  } else {
    console.log('invalid cat data');
    return;
  }
};

const cats = [];

cats.push(catFactory('cleo', 10, 'brown'));
cats.push(catFactory('meg', 8, 'orange'));
cats.push(catFactory('meg'));
cats.push(catFactory());

console.log(cats[1].meow());

// prototypal inheritance

// Constructor
const Cat = function(name, age, fur) {
  (this.name = name),
    (this.age = age),
    (this.fur = fur),
    (this.meow = function() {
      return `${this.name}: Meow!`;
    });
};

const protoCats = [];

protoCats.push(new Cat('boof', 3, 'black'));

console.log(protoCats[0].meow());

Cat.prototype.eat = function(food) {
  return `${this.name} likes ${food}`;
};

console.log(protoCats[0].eat('mice'));
