function findAverage(array) {
  const length = array.length;
  if (length <= 0) {
    return 0;
  }
  const sum = array.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return sum / length;
}
console.log(findAverage([1, 2, 4, 5]));
