const removeFromArray = function (array, ...param) {
  for (let j = 0; j < param.length; j++) {
    const paramelement = param[j];
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      if (element === paramelement) {
        array.splice(index, 1);
        index--;
      }
    }
  }
  return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
