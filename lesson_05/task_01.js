"use strict";

const euro = (dollar, coeff) => {
  return dollar * coeff;
};
const result = euro(64, 1.2);
console.log('result: ', result);

