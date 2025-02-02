/*
 * Returns product of elements of an Array using recursive approach.
 * @param arr - array whose elements are going to be multiplied
 */

function productOfArray(arr: number[]): number {
  let copy: number[] = arr;
  if (copy.length === 1) {
    return arr[0];
  } else {
    return copy.pop()! * productOfArray(copy);
  }
}
