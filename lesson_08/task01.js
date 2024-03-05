"use strict";

const getRandomNum = (count) => {
  const array = [];

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    array.push(randomNumber);
  }
  return array;
};
console.log(getRandomNum(100));
