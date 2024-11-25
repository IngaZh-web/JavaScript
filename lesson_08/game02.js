"use strict";

// запрашиваем у пользователя данные
let minNumber = +prompt("Введите минимальное значение от 1 до 100.");
let maxNumber = +prompt("Введите максимальное значение от 1 до 100.");

// проверка корректности ввода
if (isNaN(minNumber) || isNaN(maxNumber) || minNumber < 1 || maxNumber > 100 || minNumber >= maxNumber) {
  alert("Вы ввели некорректное значение. Попробуйте снова.");
} else {
  // генерируем случайное число в диапазоне от minNumber до maxNumber
  let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  console.log("Сгенерированное случайное число: ", randomNumber); 

  // вычисляем диапазон и лимит попыток
  let rangeNumber = maxNumber - minNumber + 1;
  let attemptsLimit = Math.floor(rangeNumber * 0.3);

  console.log("Диапазон чисел: ", rangeNumber);  
  console.log("Ограничение по попыткам: ", attemptsLimit); 

  if (attemptsLimit > 50) {
    attemptsLimit = 15;  // максимальное количество попыток
  }

  let userAttempts = [];
  let actualAttempts = 0;

  // запускаем цикл игры
  while (actualAttempts < attemptsLimit) {
    let userNumber = +prompt(
      `Попытка ${
        actualAttempts + 1
      } из ${attemptsLimit}. Введите число от ${minNumber} до ${maxNumber}.`
    );

    // проверка на корректность ввода
    if (isNaN(userNumber) || userNumber < minNumber || userNumber > maxNumber) {
      alert("Вы ввели некорректное значение. Попробуйте снова.");
      continue;
    }

    // проверка на повторное введённое число
    if (userAttempts.includes(userNumber)) {
      alert("Вы уже вводили это значение. Попробуйте снова.");
      continue;
    }

    // запоминаем введённое число
    userAttempts.push(userNumber);
    actualAttempts++;

    console.log(`Введённое число: ${userNumber}`);

    // проверка на совпадение со случайным числом
    if (userNumber === randomNumber) {
      alert('Поздравляем, вы выиграли!');
      break;
    } else if (userNumber > randomNumber) {
      alert('Ваше число больше случайного! Попробуйте снова');
    } else if (userNumber < randomNumber) {
      alert('Ваше число меньше случайного! Попробуйте снова.');
    }

    // Если попытки закончились
    if (actualAttempts === attemptsLimit) {
      alert('Ваши попытки закончились. Вы проиграли.');
    }
  }
}
