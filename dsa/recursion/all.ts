/*
 * Returns true if all elements of array pass the callback function otherwise returns false.
 * @param arr - array which will be passed as an argument to callback function.
 * @param callback - callback function which would return either true or false , takes elements of array as arguments
 *
 */

function recursive(arr: any[], callback: Function): boolean {
  if (arr.length === 0) return true;
  if (!callback(arr[arr.length - 1])) {
    return false;
  } else {
    arr.pop();
    return recursive(arr, callback);
  }
}
