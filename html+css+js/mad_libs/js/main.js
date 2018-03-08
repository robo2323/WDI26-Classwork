const getName = () => {
  return document.getElementById('person').value;
};

const getAdj = () => {
  return document.getElementById('adjective').value;
};

const getNoun = () => {
  return document.getElementById('noun').value;
};

const showMadlib = function() {
  document.getElementById(
    'story'
  ).textContent = `${getName()} really ${getAdj()} ${getNoun()}`;
};

document.getElementById('lib-button').addEventListener('click', showMadlib);
