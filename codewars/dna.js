function dnaStrand(dna) {
  dna = dna.split("");
  return dna
    .map((item) => {
      switch (item) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "G":
          return "C";
          break;
        case "C":
          return "G";
          break;
        default:
          console.log("nope");
          break;
      }
    })
    .join("");
}
