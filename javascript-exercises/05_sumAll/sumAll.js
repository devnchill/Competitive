const sumAll = function (param1, param2) {
  let sum = 0;
  if (
    param1 < 0 ||
    param2 < 0 ||
    Number.isNaN(param1) ||
    Number.isNaN(param2) ||
    typeof param1 !== "number" ||
    typeof param2 !== "number"
  ) {
    return "ERROR";
  }
  if (Number.isInteger(param1) && Number.isInteger(param2)) {
    if (param1 > param2) {
      let temp = param1;
      param1 = param2;
      param2 = temp;
    }
    for (let index = param1; index <= param2; index++) {
      sum += index;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
