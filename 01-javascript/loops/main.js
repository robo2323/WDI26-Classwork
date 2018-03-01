// even/odd reporter
for (let i = 0; i <= 20; i++) {
  console.log(`${i} ${i % 2 === 0 ? 'is even' : 'is odd'}`);
}

// mult tables
const multTable = [];

for (let i = 0; i <= 10; i++) {
  for (let c = 1; c <= 10; c++) {
    multTable.push(`${i} * ${c} = ${i * c}`);
  }
}
console.table(multTable);

// // mult recursive
// const oddEven = (n) => {
//     console.log(n);
//     if (n < 10) {
//       oddEven(n + 1);
//     }
//   };
//   oddEven(0);

// grade assigner
const assignGrade = (score = 0) => {
  if (score <= 20) {
    return 'F';
  } else if (score > 20 && score <= 40) {
    return 'D';
  } else if (score > 40 && score <= 60) {
    return 'C';
  } else if (score > 60 && score <= 80) {
    return 'B';
  } else if (score > 80 && score <= 100) {
    return 'A';
  } else {
    return 'Invalid score';
  }
};

const grades = [];
for (let i = 60; i < 101; i++) {
  const grade = assignGrade(i);
  grades.push(`${i} gets a${grade === 'A' ? 'n' : ''} ${grade}`);
}
console.table(grades);
