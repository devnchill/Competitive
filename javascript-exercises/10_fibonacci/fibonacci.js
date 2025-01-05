const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let first = 0;
  let second = 1;
  let array = [];
  array[0] = 0;
  array[1] = 1;
  for (let index = 2; index <= n; index++) {
    sum = first + second;
    first = second;
    second = sum;
    array[index] = sum;
  }
  return array[n];
};
// Do not edit below this line
module.exports = fibonacci;
