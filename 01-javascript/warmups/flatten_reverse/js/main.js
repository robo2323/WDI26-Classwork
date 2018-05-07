const reverse = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

const flatten = (arr, result = []) => {

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);      
    }
  }
  return result;
};

console.log(flatten(['Hello', ['World', 42]]));
