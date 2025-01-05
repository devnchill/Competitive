const convertToCelsius = function (param1) {
  return Number(((param1 - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (param2) {
  return Number((param2 * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
