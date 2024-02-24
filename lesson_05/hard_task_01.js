"use strict";

const nod = (a, b) => {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
  return a;
};
