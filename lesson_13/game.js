'use strict';
(() => {
  // создаём функцию для определения случайного числа
  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const choices = ['камень', 'ножницы', 'бумага'];

  const game = (userScore = 0, compScore = 0) => {
    // запрос у пользователя
    const userChoice = prompt('Введите \'камень\', \'ножницы\' или \'бумага\'.')
      .toLowerCase()
      .trim();

    // Перезапуск ввода, если введен неправильный выбор
    if (!choices.includes(userChoice)) {
      alert(
        'Неправильный ввод! Пожалуйста, введите \'камень\', \'ножницы\' или \'бумага\'.',
      );
      return game(userScore, compScore); // перезапуск игры, если ввод неправильный
    }

    // Выбор компьютера
    const randomIndex = getRandomIntInclusive(0, choices.length - 1);
    const computerChoice = choices[randomIndex];
    console.log('computerChoice: ', computerChoice);

    // Сравнение выборов и вывод результата
    if (userChoice === computerChoice) {
      alert('Ничья!');
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'бумага' && computerChoice === 'камень') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага')
    ) {
      alert(
        `Компьютер выбрал: ${computerChoice}.\nВы выбрали: ${userChoice}\nПоздравляем, вы выиграли!`,
      );
      userScore++; // Увеличиваем счет пользователя
    } else {
      alert(
        `Компьютер выбрал: ${computerChoice}.\nВы выбрали: ${userChoice}\nВы проиграли!`,
      );
      compScore++; // Увеличиваем счет компьютера
    }

    // Запрашиваем, хочет ли пользователь сыграть еще раз
    const playAgain = confirm(
      `Ваш счет: ${userScore}.\nСчет компьютера: ${compScore}.\nХотите сыграть еще раз?`);

    if (playAgain === false) {
      // Если пользователь нажал "отмена", запрашиваем дополнительное подтверждение
      const confirmExit = confirm('Вы точно хотите выйти?');
      if (confirmExit) {
        alert(
          `Игра закончена!\nВаш итоговый счет: ${userScore},\nСчет компьютера: ${compScore}`);
      } else {
        return game(userScore, compScore); // Рекурсивный вызов с обновленными счетами
      }
    } else {
      return game(userScore, compScore); // Рекурсивный вызов с обновленными счетами
    }
  };

  // Запуск игры
  window.game = game;
})();
