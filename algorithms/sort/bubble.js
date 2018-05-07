const bubble = (arr) => {
  list = [...arr];
  for (let i = list.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      const a = list[j];
      const b = list[j + 1];
      if (a > b) {
        list[j] = b;
        list[j + 1] = a;
      }
    }
  }
  return list;
};

const arr = [1, 4, 6, 4, 8, 3, 5, 3, 33, 6, 3435, 66, 7, 23, 1, 2, 9, 7];

console.log(`${arr} --> ${bubble(arr)}`);
