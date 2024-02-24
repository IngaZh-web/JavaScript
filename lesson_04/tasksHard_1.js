'use strict'

//task # 1

const salaryUser = Number(prompt("Введите размер зарплаты"));
const tax_13 = 0.13;
const tax_20 = 0.2;
const tax_30 = 0.3;
if (salaryUser < 15000) {
	alert (`Ваша зарплата составляет: ${salaryUser - salaryUser * tax_13} руб.`)
} else if (salaryUser >= 15000 && salaryUser < 50000) {
	alert (`Ваша зарплата составляет: ${salaryUser - salaryUser * tax_20} руб.`)
} else if (salaryUser >= 50000) {
	alert (`Ваша зарплата составляет: ${salaryUser - salaryUser * tax_30} руб.`)
}

//task # 2
const salaryUser_2 = Number(prompt("Введите размер зарплаты"));
const taxProgressive_13 = 0.13;
const taxProgressive_20 = 0.2;
const taxProgressive_30 = 0.3;
if (salaryUser_2 < 15000) {
  alert(
    `Ваша зарплата составляет: $ ${
      salaryUser_2 - salaryUser_2 * taxProgressive_13
    }`
  );
} else if (salaryUser_2 >= 15000 && salaryUser_2 < 50000) {
  alert(
    `Ваша зарплата составляет: $ ${
      salaryUser_2 -
      (salaryUser_2 - 15001) * taxProgressive_20 -
      15000 * taxProgressive_13
    }`
  );
} else if (salaryUser_2 >= 50000) {
  alert(
    `Ваша зарплата сщставляет: $ ${
      salaryUser_2 -
      (salaryUser_2 - 50001) * taxProgressive_30 -
      (salaryUser_2 - 15001) * taxProgressive_20 -
      15000 * taxProgressive_13
    }`
  );
}
