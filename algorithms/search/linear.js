const linSearch = (list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return `the index of ${item} is ${i}`;
    }
  }
  return 'item not found';
};

console.log(linSearch([1, 6, 8, 9, 4, 5, 6, 34, 5, 6, 7, 8, 3], 35));
