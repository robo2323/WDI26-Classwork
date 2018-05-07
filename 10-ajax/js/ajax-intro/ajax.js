document.addEventListener(
  'DOMContentLoaded',
  () => {
    const fetchFact = () => {
      fetch('http://numbersapi.com/random/trivia?json')
        .then(function(response) {
          return response.json();
        })
        .then(function(res) {
          document.querySelector('#fact').textContent = res.text;
        });
    };

    // const fetchFact = () => {
    //   let fact;
    //   const xhr = new XMLHttpRequest();
    //   xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    //   xhr.send();
    //   xhr.onreadystatechange = (res) => {
    //     if (xhr.readyState !== 4) {
    //       return;
    //     }

    //   };
    // };

    const fetchButton = document
      .querySelector('#fetch')
      .addEventListener('click', fetchFact);
  },
  false
);
