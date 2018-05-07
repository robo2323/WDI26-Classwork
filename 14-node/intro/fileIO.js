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

const p = readFile('readme.txt')
p.then(data=>console.log(data));

