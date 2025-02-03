/*
 * Returns the sum of squares of elements present inside array
 * @param arr - array passed by the caller
 * @return 0 when element of array isn't an integer
 * @return element*element when element of array is an integer
 */

function sumSquares(arr: any): number {
  return Array.isArray(arr)
    ? arr.reduce(
        (accumulator, currentValue) => accumulator + sumSquares(currentValue),
        0,
      )
    : Number.isInteger(arr)
      ? arr * arr
      : 0;
}
