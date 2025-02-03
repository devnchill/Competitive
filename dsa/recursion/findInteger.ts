/*
 * Returns the no of integers present in passed array which can contain anything including nested array.
 * @param arr - array passed by the caller
 * @return 0 when no integer is found
 * @return 1 when an integer is found
 *
 * Example - totalIntegers([[[5, ""], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // Should return 7
 */

function totalIntegers(arr: any): number {
  if (!Number.isInteger(arr) && !Array.isArray(arr)) return 0;
  if (Array.isArray(arr)) {
    return arr.reduce(function (previousValue, currentValue) {
      return previousValue + totalIntegers(currentValue);
    }, 0);
  } else {
    return 1;
  }
}
