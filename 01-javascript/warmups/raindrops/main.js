const raindrops = (num) => {
  if (num % 3 === 0) {
    console.log('pling');
  } else if (num % 5 === 0) {
    console.log('plong');
  } else if (num % 7 === 0) {
    console.log('plang');
  } else {
    console.log(`${num}`);
  }
};

raindrops(6);
raindrops(10);
raindrops(14);
raindrops(11);
