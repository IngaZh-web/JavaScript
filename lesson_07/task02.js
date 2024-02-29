"use strict";

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const getAvarageValue = () => {
  let sum = 0;
  for (let i = 0; i < allСashbox.length; i++) {
    sum += allСashbox[i];
    let avarage = Math.ceil(sum / allСashbox.length);
    console.log("avarage: ", avarage);
  }
};
getAvarageValue();
