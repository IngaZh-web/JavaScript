"use strict";

const calculate = (totalPrice, quantityOfGoods, promoCode) => {
  if (quantityOfGoods > 10) {
    totalPrice === totalPrice - totalPrice * 0.03;
  } else if (totalPrice > 30000) {
    totalPrice === totalPrice - totalPrice * 0.15;
  } else if (promoCode === "METHED") {
    totalPrice === totalPrice - totalPrice * 0.1;
  } else if (promoCode === "G3H2Z1") {
    totalPrice -
      totalPrice * 0.03 -
      (totalPrice - totalPrice * 0.15) -
      totalPrice * 0.1 >
      2000;
  }
};
