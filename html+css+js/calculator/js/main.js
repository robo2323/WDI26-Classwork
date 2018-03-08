// operations
const sqrNum = (num) => {
  return num * num;
};

const numDivTwo = (num) => {
  return num / 2;
};

const fraction = (fraction, whole) => {
  return whole / fraction;
};

const circleRadius = (r) => {
  return Math.pi * r * r;
};


// insert solution in DOM
const showSolution = function() {

  let solution;
  const buttonId = this.getAttribute('id');

  if (/square/g.test(buttonId)) {
    solution = sqrNum(document.getElementById('square-input').value);
  }
  // add rest of operators here.....
  // .....
  
  document.getElementById('solution').textContent = solution;
};

// add event listeners to buttons
const buttons = document.getElementsByTagName('BUTTON');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showSolution);
}
