// custom callbacks

const colors = ['red', 'green', 'blue', 'orange', 'indigo'];

const each = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

each(colors, (color) => {
  console.log(color);
});

each(colors, console.log);

// Canadian functon runner

const canadianDo = (cb) => {
  console.log('blablabla');
  cb();
  console.log('blablabla222');
};

canadianDo(()=>{
    console.log('hello');

})