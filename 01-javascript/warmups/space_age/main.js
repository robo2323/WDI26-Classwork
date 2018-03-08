// Space Age Warmup
// Given an age in seconds, calculate how old someone would be on:

// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.

// There are 31557600 seconds in an Earth year.

// Bonus:
// Have the option of either returning the ages on all planets, or any of the above planets individually.

const spaceAge = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,

  earthAge: (seconds) => {
    return seconds / 31557600;
  },

  planetAge: function(planet, earthAge) {
    return this[planet] * earthAge;
  },

  getSpaceAge: function(seconds, planet) {
    return this.planetAge(planet, this.earthAge(seconds));
  }
};

console.log(Math.floor(spaceAge.getSpaceAge(1000000000, 'Earth')));
