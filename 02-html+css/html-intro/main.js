// what number is bigger?
const greaterNum = (numOne, numTwo) => {
  return numOne > numTwo ? numOne : numTwo;
};

console.log(greaterNum(10, 20));

// word translator
const helloWorld = (langCode = 'en') => {
  switch (langCode) {
    case 'es':
      return '¡Hola Mundo!';

    case 'de':
      return 'Hallo Welt!';

    case 'en':
      return 'Hello World!';

    case 'hu':
      return 'Helló Világ!';
    default:
      return 'Invalid country code';
  }
};

console.log(helloWorld('en'));
console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('hu'));
console.log(helloWorld('gubjb'));

// grade assigner
const assignGrade = (score = 0) => {
  if (score <= 20) {
    return 'F';
  } else if (score > 20 && score <= 40) {
    return 'D';
  } else if (score > 40 && score <= 60) {
    return 'C';
  } else if (score > 60 && score <= 80) {
    return 'B';
  } else if (score > 80 && score <= 100) {
    return 'A';
  } else {
    return 'Invalid score';
  }
};

console.log(assignGrade());
console.log(assignGrade(30));
console.log(assignGrade(50));
console.log(assignGrade(70));
console.log(assignGrade(90));

// Pluraliser
const pluralise = (noun, num) => {
  switch (noun) {
    case 'goose':
      return num < 2 ? `${num} ${noun}` : `${num} geese`;
    case 'sheep':
      return `${num} ${noun}`;
    default:
      return num < 2 ? `${num} ${noun}` : `${num} ${noun}s`;
  }
};

console.log(pluralise('dog', 1));
console.log(pluralise('dog', 5));
console.log(pluralise('goose', 1));
console.log(pluralise('goose', 5));
console.log(pluralise('sheep', 5));
