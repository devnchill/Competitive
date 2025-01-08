// function getSum(a, b) {
//   return a === b ? a : findResult();
//   function findResult() {
//     let sum = 0;
//     const sortedArray = [a, b].sort((a, b) => a - b);
//     for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
//       sum += i;
//     }
//     return sum;
//   }
// }

function getSum(a, b) {
  return a === b ? a : Array.from({ length: Math.abs(a - b) + 1 }, (_, i) => a + i).reduce((previous, current) => previous + current)
}
console.log(getSum(1, 9))
