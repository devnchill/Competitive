/*
 * Returns array with fibonacci sequence upto param sequence using iterative approach.
 * @param param - number which will be passed as an argument to determine the lenght of fibonacci sequence.
 * @returns Error if param is negative or not an integer.
 * @returns array with fibonacci sequence upto param no of elemetns in array for valid input.
 *
 * Example - fib(2) -> [0,1]
 * Example - fib(5) -> [0,1,2,3,5]
 * Example - fib(6) -> [0,1,2,3,5,8]
 *
 */

function fib(param: number): number[] | Error {
  const arr: number[] = [0, 1];
  if (param < 0 || !Number.isInteger(param)) throw new Error();
  if (param === 0) return [0];
  if (param === 1) return [1];
  for (let index = 2; index < param; index++) {
    arr.push(arr[index - 2] + arr[index - 1]);
  }
  return arr;
}
