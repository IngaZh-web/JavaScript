"use strict";

const getRandomArr = (count, n, m) => {
  const array = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min) + 1 + min);
    array.push(randomNumber);
  }
  return array;
};
console.log(getRandomArr(30, 0, 100));
console.log(getRandomArr(12, -75, 50));
