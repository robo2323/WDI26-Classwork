console.log(process.argv.reduce((a,e)=>{
return !isNaN(+e) && a + +e;
}));