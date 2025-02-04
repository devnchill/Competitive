/*
 * Returns fibonacci sequence upto param length
 * @param param - length of sequence
 *
 * Example - fibRec(1) -> 0
 * Example - fibRec(2) -> 1
 * Example - fibRec(3) -> 1
 * Example - fibRec(4) -> 2
 * Example - fibRec(5) -> 3
 */

function fibRec(param: number): number[] {
  if (!Number.isInteger(param) || param < 0) throw new Error("Invalid Input");
  if (param === 1) {
    return [0];
  } else if (param === 2) {
    return [0, 1];
  } else {
    let prev = fibRec(param - 1);
    let next = prev[prev.length - 1] + prev[prev.length - 2];
    prev.push(next);
    return prev;
  }
}
