const palindromes = function (param) {
  param = param.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = "";
  for (let index = 1; index <= param.length; index++) {
    let element = param[param.length - index];
    reverse += element;
  }
  return reverse === param;
};

// Do not edit below this line
module.exports = palindromes;
