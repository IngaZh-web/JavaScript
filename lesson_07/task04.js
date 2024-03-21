"use strict";

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const arrSum = allСashbox.map((subArr) =>
  subArr.flat(Infinity).reduce((subSum, item) => subSum * item)
);

const getAveragePriceGoods = () => {
  return arrSum.reduce((acc, c) => acc + c / arrSum.length, 0);
};
getAveragePriceGoods();

console.log(arrSum);
console.log(getAveragePriceGoods());
