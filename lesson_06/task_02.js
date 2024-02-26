"use strict";

const isPrime = (number) => {
  for (let i = 1; i > 0; i++) {
    if (number % i === 0) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isPrime(1562.2));
