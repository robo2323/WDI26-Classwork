const tellFortune = (numChidren, partnerName, geoLocation, jobTitle) => {
  const vowels = /^[aeiouAEIOU]/g;
  return `You will be a${
    vowels.test(jobTitle) ? 'n' : ''
  } ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChidren} kid${
    numChidren < 2 ? '' : 's'
  }`;
};

const appendEl = (el) => {
  document.getElementById('main').appendChild(el);
};

const fortuneTellerEl = document.createElement('P');
fortuneTellerEl.textContent = tellFortune(2, 'sam', 'sydney', 'astronaut');
appendEl(fortuneTellerEl);

// ------------------
const calculateDogAge = (age, rate = 7) => {
  return `Doggos age in doggo years is ${age * rate}`;
};

const dogAgeEl = document.createElement('P');
dogAgeEl.textContent = calculateDogAge(10);
appendEl(dogAgeEl);

// -------------------------
const calculateSupply = (age, amntPerDay) => {
  return (80 - age) * 365 * Math.round(amntPerDay);
};

const lifetimeSupplyEl = document.createElement('P');
lifetimeSupplyEl.textContent = calculateSupply(36, 2);
appendEl(lifetimeSupplyEl);

// ----------------------
const calcCircle = (r, calculation = 'circumference' /* or 'area' */) => {
  if (calculation === 'area') {
    return Math.PI * r * r;
  } else if (calculation === 'circumference') {
    return 2 * Math.PI * r;
  } else {
    return 'calculation method not valid';
  }
};

const circleEl = document.createElement('P');
circleEl.textContent = calcCircle(5);
appendEl(circleEl);

// ----------------------
const convertTemp = (temp, convertTo = 'f' /* or 'c'*/) => {
  if (convertTo === 'c') {
    return `${(temp - 32) * 5 / 9}°C`;
  } else if (convertTo === 'f') {
    return `${temp * 9 / 5 + 32}°F`;
  } else {
    return 'convertTo arg is invalid, must be either "f" or "c"';
  }
};

const tempEl = document.createElement('P');
tempEl.textContent = convertTemp(0,'f');
appendEl(tempEl);
