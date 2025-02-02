/*
 * Returns power of a number.
 * @param a - base
 * @param b - exponent
 * @returns value of a raised to the power b.
 *
 * Example: powewr(2,4) -> 16 (2^4)
 */

function power(a: number, b: number): number {
  return b === 0 ? 1 : a * power(a, b - 1);
}
