/*
 * Returns sorted array
 * @param arr - array to be sorted
 *
 * Example - mergeSort([23, 2389, 11, 0]) -> [0,11,23,2389];
 */

function mergeSort(arr: number[]): number[] {
  /*
   * Returns Merged Array
   * @param leftArr - left half of array (done recursively)
   * @param rightArr- right half of array (done recursively)
   *
   * Example - mergeSort([2],[3]) -> [2,3];
   */

  function merge(leftArr: number[], rightArr: number[]): number[] {
    if (!Array.isArray(leftArr) || !Array.isArray(rightArr))
      throw new Error("Invalid Input");
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift()!);
      } else {
        sortedArr.push(rightArr.shift()!);
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }

  if (!Array.isArray(arr)) throw new Error("Invalid Input");
  if (arr.length < 2) return arr;
  const mid: number = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
