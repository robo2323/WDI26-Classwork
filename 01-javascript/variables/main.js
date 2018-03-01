const numOfChildren = Math.floor(Math.random() * 6);
const partnerNames = ['Mary', 'Sam', 'Rob', 'Jill', 'John'];
const partnerName =
  partnerNames[Math.floor(Math.random() * partnerNames.length)];
const locations = ['Sydney', 'Melbourne', 'Perth', 'Adelaide'];
const locatn = locations[Math.floor(Math.random() * locations.length)];
const jobTitle = 'Programmer';

console.log(
  `You will be a ${jobTitle} in ${locatn}, and married to ${partnerName} with ${numOfChildren} kids.`
);

// -----------------------------
const date = new Date().getFullYear();

const birthYear = new Date(82, 8, 7).getFullYear();

console.log(`Age is: ${date - birthYear}`);

// ----------------------------------
const currentAge = 36;
const maxAge = 100;
const amountPerDay = 23;
const average = (maxAge - currentAge) * 365 * amountPerDay;
console.log(`You will need ${average}`);

// ----------------------------
const radiusInput = document.createElement('INPUT');
radiusInput.placeholder = 'enter circle radius';
radiusInput.type = 'number';
document.getElementById('main').appendChild(radiusInput);

const circleInfoDisplay = document.createElement('P');
document.getElementById('main').appendChild(circleInfoDisplay);

let r;
let circumfrence;
let area;

radiusInput.addEventListener('input', function() {
  r = this.value;
  circumfrence = Math.round(2 * Math.PI * r);
  area = Math.round(Math.PI * r * r);
  circleInfoDisplay.textContent = `Radius = ${r}, circumfrence = ${circumfrence}, area = ${area}`;
});

// -------------------------------------------

const degreesInput = document.createElement('INPUT');
degreesInput.placeholder = 'enter temperature';
degreesInput.type = 'number';
document.getElementById('main').appendChild(degreesInput);

const celciusButton = document.createElement('BUTTON');
celciusButton.textContent = 'Convert to C';

const degreesDisplay = document.createElement('SPAN');
document.getElementById('main').appendChild(degreesDisplay);

const farenheitButton = document.createElement('BUTTON');
farenheitButton.textContent = 'Convert to F';

document.getElementById('main').appendChild(celciusButton);
document.getElementById('main').appendChild(farenheitButton);

farenheitButton.addEventListener('click', () => {
  degreesInput.value = degreesInput.value * 9 / 5 + 32;
  degreesDisplay.textContent = '°F';
});

celciusButton.addEventListener('click', () => {
  degreesInput.value = (degreesInput.value - 32) * 5 / 9;
  degreesDisplay.textContent = '°C';
});
