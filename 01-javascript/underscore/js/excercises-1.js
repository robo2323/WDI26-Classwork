// Exercises
// Iterate through numbers and log each number to the console
// Iterate through numbers and multiply each one of them by 5
// Iterate through numbers and reduce it by adding them together
// Get an array of all of the people in people that have the username "E"
// Find the first object in people that has the id of 3
// Find the first person who has an age of less than 50
// Get an array of all of the people with an age of over 60
// Remove all of the people with an age less than 40

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var people = [
  { id: 1, username: 'A', active: true, age: 20 },
  { id: 2, username: 'B', active: false, age: 35 },
  { id: 3, username: 'C', active: false, age: 50 },
  { id: 4, username: 'D', active: true, age: 65 },
  { id: 5, username: 'E', active: true, age: 80 },
  { id: 6, username: 'E', active: true, age: 95 }
];

_(numbers).each((num) => {
  console.log(num);
});

console.log(_(numbers).map((num) => num * 5));

console.log(_(numbers).reduce((sum, num) => sum + num));

console.log(_(people).where({ username: 'E' }));

console.log(
  _.chain(people)
    .where({ id: 3 })
    .first()
    .value()
);
// or use findWhere
console.log(_(people).findWhere({ id: 3 }));

console.log(
  _.chain(people)
    .filter((person) => person.age < 50)
    .first()
    .value()
);

console.log(_(people).filter((person) => person.age > 60));

console.log(_(people).reject((person) => person.age < 40));
