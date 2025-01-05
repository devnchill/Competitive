const leapYears = function (param1) {
  if ((param1 % 4 == 0 && param1 % 100 != 0) || param1 % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
