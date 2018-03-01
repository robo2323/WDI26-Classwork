const askSerge = (text = '') => {
  if (text && text === text.toUpperCase()) {
    return 'Woah, chill!';
  } if (text.slice(-1) === '?') {
    return 'Sure';
  } else if (!text) {
    return 'Fine! Be that way.';
  } else {
    return 'Whatever';
  }
};

console.log(askSerge());

console.log(askSerge('hello'));

console.log(askSerge('HELLO'));

console.log(askSerge('what?'));

console.log(askSerge(''));
