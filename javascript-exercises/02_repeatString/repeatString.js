const repeatString = function (param1, param2) {
  if (param2 < 0) {
    return "ERROR";
  }
  let result = "";
  for (let index = 0; index < param2; index++) {
    result = result + param1;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
