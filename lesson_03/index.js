"use strict";

{
  const item_1 = "Assol";
  const count = 100;
  const category = "A home dress";
  const price = 15;

	console.log(item_1);
  console.log(`Total price is: ${count * price}`);
}

{
  const item_2 = "T-short";
  const count = 23;
  const category = "Sport T-short";
  const price = 110;

  console.log(item_2);
  console.log(`Total price is: ${count * price}`);
}

{
	const item_3 = prompt("Блуза");
	const count_3 = Number(prompt(77));
	const category_3 = prompt("Блуза женская");
	const price_3 = Number(prompt(110));

	console.log(typeof item_3);
	console.log(typeof count_3);
	console.log(typeof category_3);
	console.log(typeof price_3);

	console.log(`На складе ${count_3} единиц "${category_3}", на сумму: ${count_3 * price_3} руб.`)
}
