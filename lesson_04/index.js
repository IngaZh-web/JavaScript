'use strict'


	const item = prompt("Наименование товара");
	const count = Number(prompt("Введите колличество товара", '77'));
	const category = prompt("Категория товара");
	const price = Number(prompt("Цена товара"));

	if (isNaN(count) || isNaN(price)) {
		alert("Вы ввели некорректные данные.");
	}


	console.log(`На складе ${count} единиц "${category}", на сумму: ${count * price} руб.`)




