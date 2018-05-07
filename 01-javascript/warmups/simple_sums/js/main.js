// const s2 = (num) => {
//   let sum = 1;
//   for (let i = 2; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// };

const s2 = (num, sum = 0) => {
  while (num > 0) {
    sum += num;
    num--;
    
    s2(num,sum);
  }
  return sum;
};

const s1 = (num) => {
  return num % 2;
};

console.log(s2(6));
console.log(s1(5));
