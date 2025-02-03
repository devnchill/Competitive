/*
 * Returns an array with parameter n number of times.
 * @param n - no of times to replicate the element inside the array
 * @param param - the element itself which is to be added inside the array.
 * @return [] if n is negative
 * @return param n times inside an array if n is not negative.
 *
 * Example - console.log(replicate(3, 5)) // [5, 5, 5]
 *           console.log(replicate(1, 69)) // [69]
 *           console.log(replicate(-2, 6)) // []
 **/

function replicate(n: number, param: number): number[] | [] {
  if (n <= 0) return [];
  return [param].concat(replicate(n - 1, param));
}
