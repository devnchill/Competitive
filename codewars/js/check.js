function check(a, x) {
  let flag = null;
  a.forEach((element) => {
    if (element === x) {
      flag = 1;
    }
  });
  if (flag === 1) {
    return true;
  } else {
    return false;
  }
}
