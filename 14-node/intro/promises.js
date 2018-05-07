const fs = require('fs');

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     return err;
//   }
//   console.log(data);
// });

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

const p = readFile('readme.txt');
p.then((data) => console.log(data));

// promise wait/settimout
const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout((err) => {
      resolve(time);
    }, time);
  });
};
module.exports = wait;
// wait(3000).then((time) => {
//   console.log(`done after ${time}ms`);
// });
