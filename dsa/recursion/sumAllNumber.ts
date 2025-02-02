/*
 * Returns the sum of natural numbers from 1 to n using a recursive approach.
 * @param n - first input number
 */

function sumRange(n: number): number {
  return n === 1 ? n : n + sumRange(n - 1);
}
