function abbrevName(name) {
  let n1 = name.split(" ");
  let initials = n1.map((element) => element[0].toUpperCase());
  return initials.join(".");
}


