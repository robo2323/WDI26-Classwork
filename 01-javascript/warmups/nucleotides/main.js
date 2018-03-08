const countNucleotides = (str) => {
  const matches = str.match(/[AGCTU]/gi);
  if (matches) {
    const nucleotides = { A: 0, G: 0, C: 0, T: 0, U: 0 };
    matches.forEach((e) => {
      nucleotides[e.toUpperCase()] += 1;
    });
    return nucleotides;
  } else {
    return false;
  }
};

console.log(countNucleotides('AgcTuUuUuUokwenvbivbr'));
