"use strict";

const discount_3 = 0.03;
const discount_15 = 0.15;
const discount_30 = 0.3;
const discount_M = "METHED";
const discount_G = "G3H2Z1";

const calculate = (totalAmount, quantityOfGoods, promoCode) => {
  if (quantityOfGoods > 10) {
    totalAmount = totalAmount - totalAmount * discount_3;
    console.log(totalAmount);
  }
  if (totalAmount >= 30000) {
    totalAmount = totalAmount - (totalAmount - 30000) * discount_15;
    console.log(totalAmount);
  }
  if (promoCode === discount_M) {
    totalAmount = totalAmount - totalAmount * 0.1;
    console.log(totalAmount);
  }
  if (promoCode === discount_G && totalAmount > 2000) {
    totalAmount = totalAmount - 500;
    console.log(totalAmount);
  }
};
calculate(35000, 12, discount_M);
