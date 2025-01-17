function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let avg =
    classPoints.reduce((previous, current) => {
      return previous + current;
    }, 0) / classPoints.length;
  return yourPoints > avg ? true : false;
}
