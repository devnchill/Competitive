function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((item) => !vowels.includes(item.toLowerCase()))
    .join("");
}
console.log(disemvowel("this is a demo string"));
