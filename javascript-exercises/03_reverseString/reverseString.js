const reverseString = function (string) {
  let length = string.length;
  let strnew = "";
  for (let index = 0; index < length; index++) {
    strnew += string[length -1 - index];
  }
  return strnew;
};

// Do not edit below this line
module.exports = reverseString;
