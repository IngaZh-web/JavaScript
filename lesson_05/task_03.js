"use strict";

let string = "Привет мир";

const revertString = (string) => {
  return [...string].reverse().join("");
};
console.log(revertString(string));
