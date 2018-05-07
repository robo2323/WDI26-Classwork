const app = new Vue({
  el: '#app',
  data: {
    //like state
    message: 'Hellooooooooooo!!!'
  }
});
const app2 = new Vue({
  el: '#app2',
  data: {
    //like state
    message: `page loaded on ${new Date().toLocaleString()}`
  }
});
const app3 = new Vue({
  el: '#app3',
  data: {
    //like state
    h1message: 'bibjkkbkjbj'
  }
});
const app4 = new Vue({
  el: '#app4',
  data: {
    //like state
    seen: true
  }
});
const app5 = new Vue({
  el: '#app5',
  data: {
    todos: [{ text: 'hoihoih' }, { text: 'dfsfsf' }, { text: 'jpjjioj' }, { text: 'fwvvrv' }, { text: 'hjjkhj' }]
  }
});
const app6 = new Vue({
  el: '#app6',
  data: {
    message:'robert'
  },
  methods:{
      reverseMessage:function(){
          this.message=this.message.split('').reverse().join('');
      }
  }
});
