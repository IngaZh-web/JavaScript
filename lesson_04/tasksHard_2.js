'use strict'


const salary = +prompt("Введите размер заработной платы");
if (salary <= 15000) {
  console.log (salary * 0.13)
}
if (salary > 15000 && salary <= 50000) {
	console.log((salary - 15000) * 0.2 + 15000 * 0.13)
}
if (salary > 50000) {
	console.log((salary - 50000) * 0.3 + (50000 - 15000) * 0.2 + 15000 * 0.13)
}
