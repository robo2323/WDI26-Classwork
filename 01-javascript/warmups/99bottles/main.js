const countBeers = (numBottles = 99, endCount = 0) => {
  for (let i = numBottles; i >= endCount; i--) {
    if (i > 1) {
      console.log(
        `${i} botles of beer on the wall.....Take one down, pass it around, ${i -
          1} bottles of beer on the wall...`
      );
    }
    if (i === 1) {
      console.log(
        '1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.'
      );
    }
    if (i === 0) {
      console.log(`No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, ${numBottles} bottles of beer on the wall.`);
    }
  }
};

countBeers(20,10);
