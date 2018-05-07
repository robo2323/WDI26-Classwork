//const setup =
// (() => {
//   // these variables persist through a closure
//   const button = document.querySelector('#click');
//   let message = 'this is a message';

//   button.addEventListener('click', () => {
//     document.querySelector('h1').textContent = message; // can still access message via the closure
//   });
// })();
// setup();
// now message is not accesible

let currId = 0;
const bikeId = () => {
  return currId++;
};
// const bikes = [bikeId(), bikeId(), bikeId(), bikeId(), bikeId(), bikeId(), bikeId()];

// using a closure
const idMaker = () => {
  let currId = 0;
  return () => {
    return currId++;
  };
};

const bikeIdWithClosure=idMaker();
const bikes = [bikeIdWithClosure(),bikeIdWithClosure(),bikeIdWithClosure(),bikeIdWithClosure(),bikeIdWithClosure(),bikeIdWithClosure()];
console.log(bikes);

// html helper functions
// const h1=(text)=>{
//     return `<h1>${text}</h1>`
// }
// const h2=(text)=>{
//     return `<h2>${text}</h2>`
// }
// const h3=(text)=>{
//     return `<h3>${text}</h3>`
// }

// console.log((h1('test')))

// with closures
const tagMaker=(tagName)=>{
    const specificTag=tagName
    return (text)=>{
        return `<${specificTag}>${text}</${specificTag}>`
    }
}

const tag=tagMaker('p')
console.log(tag('text'));
