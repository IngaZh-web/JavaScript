'use strict';

const getRandomNumber = Math.floor(Math.random() * 100) + 1;
console.log('getRandomNumber: ', getRandomNumber);

function recursion(getRandomNumber) {
  const userNumber = +prompt('Введите число от 1 до 100');
  console.log('userNumber: ', userNumber);

  if (parseInt(userNumber) === getRandomNumber) {
    recursion(alert('Правильно!'));
  } else if (parseInt(userNumber) < getRandomNumber) {
    alert('Мало! Попробуйте ещё.');
  } else {
    alert('Много! Попробуйте ещё.');
  }
}
recursion(getRandomNumber);
