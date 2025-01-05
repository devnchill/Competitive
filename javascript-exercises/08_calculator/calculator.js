const add = function (param1, param2) {
  return param1 + param2;
};

const subtract = function (param1, param2) {
  return param1 - param2;
};

const sum = function (param) {
  let totalSum = param.reduce((value, current) => value + current, 0);
  return totalSum;
};

const multiply = function (param) {
  let totalProduct = param.reduce((value, current) => value * current, 1);
  return totalProduct;
};

const power = function (param1, param2) {
  i = 1;
  let product = 1;
  while (i <= param2) {
    product = param1 * product;
    i++;
  }
  return product;
};

const factorial = function (param) {
  let i = 1;
  let product = 1;
  while (i <= param) {
    product *= i;
    i++;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
