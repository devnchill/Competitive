var uniqueInOrder = function (iterable) {
  const iterable = typeof iterable === Object ? iterable : iterable.split("");
  iterable.filter((item, previous) => {
    return item !== previous;
  });
};
