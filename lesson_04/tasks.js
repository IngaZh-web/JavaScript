"use strict";

const rain = Math.round(Math.random());
console.log("rain: ", rain);
if (rain === 1) {
  alert("Пошёл дождь. Возьмите зонт");
}
if (rain === 0) {
  alert("Дождя нет!");
}

// task № 3
const minScore = 265;

const mathScore = 85;
const langScore = 75;
const informaticsScore = 95;

const totalScore = mathScore + langScore + informaticsScore;
console.log('totalScore: ', totalScore);

if (totalScore >= minScore) {
	alert ('Поздравляю, вы поступили на бюджет!');
} else alert ('Ждём вас в следующем году.');


//task № 4
const withdraw = prompt("Какую сумму вы хотите снять?");
const enteredAmount = Number();
if (enteredAmount !== 100) {
  alert("Введите сумму, эквивалентную 100")
} 

