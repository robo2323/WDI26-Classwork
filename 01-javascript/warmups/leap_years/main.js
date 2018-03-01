const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// get the h3 element which will display weather the entered number is leap or not and store it in a variable for later
const result = document.getElementById('result');
// get the input element, add an event listener 'input' that will fire everytime the user changes the input
document
  .getElementById('leap-year-input')
  // the event listener will run a function that itself invokes the isLeapyear function using the leap year input value as the argument
  .addEventListener('input', function() {
    // conditional ternary used to change the textContent of the reslt element based on weather isLeapYear returns true or false
    isLeapYear(this.value)
      ? (result.textContent = 'is a leap year')
      : (result.textContent = 'is not a leap year');
  });
