'use strict';
// создаю модуль IIFE
(function() {
  let playerBalls = 5;
  let botBalls = 5;

  // Игра продолжается, пока у игрока и бота есть шарики
  while (playerBalls > 0 && botBalls > 0) {
    // Ход игрока: запрашиваем, сколько шариков игрок хочет выбрать
    let playerGuess = prompt(
      `У вас ${playerBalls} шариков. Введите значение от 1 до ${playerBalls}.`,
    );
    playerGuess = parseInt(playerGuess);

    // Проверка, корректно ли введено значение
    if (playerGuess < 1 || playerGuess > playerBalls || isNaN(playerGuess)) {
      alert('Некорректное значение. Попробуйте снова.');
      continue; // начинаем цикл заново, если значение некорректно
    }

    // Игрок делает предположение о четности выбора бота
    const playerEvenGuess = confirm(
      `Как вы считаете, что бот выбрал? Нажмите 'ОК' для четного количества шариков, 'Отмена' для нечетного.`,
    );

    alert(`Вы выбрали ${playerGuess}. Теперь ход бота!`);

    // Ход бота: выбираем случайное количество шариков от 1 до botBalls
    const botGuess = Math.floor(Math.random() * botBalls) + 1;

    alert(`Бот выбрал ${botGuess}.`);

    // Определяем четность выбора бота
    const isBotGuessEven = botGuess % 2 === 0; // Четность выбора бота

    // Проверяем предположение игрока
    const isPlayerGuessCorrect =
        (playerEvenGuess && isBotGuessEven) ||
        (!playerEvenGuess && !isBotGuessEven);

    // Определяем, кто забирает шарики
    if (isPlayerGuessCorrect) {
      alert(`Вы угадали! Вы забираете шарики у бота.`);
      playerBalls += botGuess; // Игрок получает шарики от бота
      botBalls -= botGuess; // Бот теряет шарики
    } else {
      alert(`Вы не угадали! Бот забирает шарики у вас.`);
      botBalls += playerGuess; // Бот получает шарики от игрока
      playerBalls -= playerGuess; // Игрок теряет шарики
    }

    // Вывод текущего состояния игры
    alert(
      `Текущие баллы: Игрок - ${playerBalls} шариков. Бот - ${botBalls}.`,
    );
  }

  // Проверка на победителя
  if (playerBalls <= 0) {
    alert(`Вы проиграли! У вас больше нет шариков.`);
  } else {
    alert(`Бот проиграл! У него больше нет шариков.`);
  }
}

)();
