// Numbers must be sorted before you can binarySearch
// And don't forget: .sort() is broken for numbers.

const binarySearch = (haystack, needle) => {
  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    let mid = Math.round( start + (end - start) / 2 ); // This line is interesting

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null;
}


console.log( binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 0) );
