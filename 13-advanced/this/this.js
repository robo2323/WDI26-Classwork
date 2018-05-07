// this, bind (call, apply)

const groucho = {
  name: 'Groucho',
  greeting() {
    console.log(`hi i am ${this.name}`);
  }
};

groucho.greeting();

const unboundGreeter = groucho.greeting;
unboundGreeter.call(groucho);

const greeter = groucho.greeting.bind(groucho);
greeter();

// apply
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1000];
console.log(Math.max.apply(null, nums));
// es6 spread
console.log(Math.max(...nums));
