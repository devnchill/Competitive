/*
 * Returns factorial of a number using recursive approach.
 * @param a - array whose elements are going to be multiplied
 *
 * Example - (2) -> 2 (2*1)
 * Example - (4) -> 24 (4*3*2*1)
 */

function factorial(a: number): number {
  if (a < 0 || !Number.isInteger(a)) {
    return -1;
  }
  if (a === 0) return 1;
  return a === 1 ? a : a * factorial(a - 1);
}
console.log(factorial(0));
