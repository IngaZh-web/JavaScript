'use strict'

const salaryUser = +prompt("Введите размер вашей зарплаты");
if (salaryUser <= 15000) {
	console.log(salaryUser * 0.13)
}
if (salaryUser > 15000 && salaryUser <= 50000) {
	console.log(salaryUser * 0.2)
}
if (salaryUser > 50000) {
	console.log(salaryUser * 0.3)
}