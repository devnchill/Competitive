function squareSum(numbers) {
  return numbers.reduce((previous, current) => {
    return previous + current * current;
  }, 0);
}
console.log(squareSum([1, 2, 3]));
