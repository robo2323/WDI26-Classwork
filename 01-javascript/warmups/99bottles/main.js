const countBeers = (numBottles = 99, endCount = 0) => {
  for (let i = numBottles; i >= endCount; i--) {
    console.log(
      `${
        i > 0
          ? `${i} botle${
            i > 1 ? 's' : ''
          } of beer on the wall.....Take one down, pass it around, ${
            i - 1 === 0 ? 'no more' : i - 1
          } bottles of beer on the wall...`
          : `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${numBottles} bottles of beer on the wall.`
      }`
    );
  }
};

countBeers();
