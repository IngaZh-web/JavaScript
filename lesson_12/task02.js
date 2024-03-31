'use strict';

function getRandomNumber(min, max) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}
getRandomNumber(0, 10);


let i = 0;
let summa = 0;

function recarsive(arr) {
  arr = [];
  i++;

  summa += getRandomNumber(0, 10);
  arr.push(summa);
  console.log('arr: ', arr);

  if (summa >= 50) return;
  recarsive();
}
recarsive();

