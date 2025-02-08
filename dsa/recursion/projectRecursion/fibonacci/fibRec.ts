/*
 * Returns fibonacci sequence upto param length
 * @param param - length of sequence
 *
 * Example - fibRec(1) -> [0]
 * Example - fibRec(2) -> [0,1]
 * Example - fibRec(3) -> [0,1,1]
 * Example - fibRec(4) -> [0,1,1,2]
 * Example - fibRec(5) -> [0,1,1,2,3]
 * Example - fibRec(6) -> [0,1,1,2,3,5]
 */

function fibRec1(param: number): number[] {
  if (!Number.isInteger(param) || param < 0) throw new Error("Invalid Input");
  if (param === 1) {
    return [0];
  } else if (param === 2) {
    return [0, 1];
  } else {
    const prev = fibRec1(param - 1);
    const next = prev[prev.length - 1] + prev[prev.length - 2];
    prev.push(next);
    return prev;
  }
}

//Second Approach calling recursively in return statement

function fibRec2(param: number, arr = [0, 1]): number[] {
  if (!Number.isInteger(param) || param < 0) throw new Error("Invalid Input");
  if (arr.length === param) return arr;
  if (param === 0) return [];
  if (param < 3) {
    return param === 2 ? [0, 1] : [0];
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibRec2(param, arr);
}
