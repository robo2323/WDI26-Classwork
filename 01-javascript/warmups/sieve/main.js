const sieve = (uptTo) => {
  const result = [];
  for (let i = 0; i <= uptTo; i++) {
    // (i === 3) ^ (i === 5) && result.push(i);
    i % 2 === 0 || i % 3 === 0 || i % 5 === 0 ? false : result.push(i);
  }
  return result;
};

// console.log(sieve(30));

const graphSieve = (upTo) => {
  result = [];
  document.getElementById('main').style.height = `${upTo / 2 * 25}px`;
  document.getElementById('main').style.width = `${10 * 25}px`;
  for (let i = 1; i <= upTo; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    
    div.style.transition = 'all 1s';
    document.getElementById('main').appendChild(div);

    if (i === 1) {
      div.classList.add('square');
    } else if (i !== 2 && i % 2 === 0) {
      div.style.background = 'blue';
      div.textContent = i;
      div.classList.add('square');
    } else if (i !== 3 && i % 3 === 0) {
      div.style.background = 'purple';
      div.textContent = i;
    } else if (i !== 5 && i % 5 === 0) {
      div.style.background = 'green';
      div.textContent = i;
      div.classList.add('square');
    } else {
      div.style.background = 'red';
      div.textContent = i;
      div.classList.add('square');
    }
  }
};

graphSieve(100);
