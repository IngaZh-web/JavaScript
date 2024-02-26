"use strict";

// task # 2
const rain = Math.round(Math.random());

if (rain === 1) {
  alert("Пошёл дождь. Возьмите зонт!");
} else {
  alert("Дождя нет!");
}

//task № 3
const minScore = 265;

const mathScore = +prompt("Ввведите результат по математике");
const langScore = +prompt("Введите результат по русскому языку");
const informaticsScore = +prompt("Введите результат по информатике");
const totalScore = mathScore + langScore + informaticsScore;
if(totalScore >= minScore) {
	console.log("Поздравляю, вы поступили на бюджет!");
}



//task № 4
const minSum = 100;
const withdraw = +prompt("Какую сумму вы хотите снять?");
if (withdraw % minSum === 0) {
  console.log(`Вы хотите снять ${withdraw} руб.`);
}
