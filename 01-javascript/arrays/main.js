// top choices
const favShows = [
  'mr robot',
  'american gods',
  'twin peaks',
  'westworld',
  'altered carbon'
];

for (let i = 0; i < favShows.length; i++) {
  let suffix = 'th';
  switch (i + 1) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      break;
  }

  console.log(`My ${i + 1}${suffix} choice is ${favShows[i]}`);
}

