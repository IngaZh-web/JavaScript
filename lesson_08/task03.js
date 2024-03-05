"use strict";

"use strict";

const getRandomArr = (count, n, m, parity) => {
	if(parity && !['even', 'odd'].includes(parity)) return []
  const array = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);


  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min) + 1 + min);
		if (parity) {
			const num = randomNumber % 2
			if (parity === 'even' && num) continue
			if (parity === 'odd' && !num) continue
		}
    array.push(randomNumber);
  }
  return array;
};
console.log(getRandomArr(30, 0, 100));
console.log(getRandomArr(12, -75, 50));
console.log(getRandomArr(10, 100, 5, 'even'));
console.log(getRandomArr(10, 100, 5, 'odd'));