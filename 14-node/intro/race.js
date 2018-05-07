const wait = require('./promises');

const racer1 = wait(Math.random() * 10000).then(() => console.log('1 finished'));
const racer2 = wait(Math.random() * 10000).then(() => console.log('2 finished'));
const racer3 = wait(Math.random() * 10000).then(() => console.log('3 finished'));
const racer4 = wait(Math.random() * 10000).then(() => console.log('4 finished'));


Promise.all([racer1, racer2, racer3, racer4]).then(() => console.log('race over!!'));
