'use strict'

let getRandomNumber = Math.floor(Math.random() * 100) +1;
console.log('getRandomNumber: ', getRandomNumber);


while(true) {
	let userNumber = +prompt("Введите число от 1 до 100");

	if (parseInt(userNumber) === getRandomNumber) { 
		alert ("Правильно!");
		break;
	}
	else if (parseInt(userNumber) < getRandomNumber) {
		alert("Меньше! Попробуйте ещё.")
	} else 
	alert ("Больше! Попробуйте ещё.")
}