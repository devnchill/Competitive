/*
 * Returns true if searchValue is present inside the object
 * @param param - Object passed by the searchValue
 * @param searchValue - the value which will be compared with every object
 *
 * Example - const obj = {
 *  a: 23,
 *  b: {
 *    c: 23,
 *    d: "string",
 *    e: {
 *      f: "elephant",
 *    },
 *  },
 * };
 * console.log(contains(obj, "eephant"));
 * console.log(contains(obj, "string"));
 * console.log(contains(obj, "elephant"));
 * console.log(contains(obj, 25));
 *
 */

function contains(param: any, searchValue: any): boolean {
  if (typeof param === "object" && !Array.isArray(param) && param !== null) {
    for (let value of Object.values(param)) {
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
  } else {
    return param === searchValue;
  }
}
