"use strict";


const converter = (costInEuro) => {
	const dollar = 64;
	const euro = 1.2 * dollar;

	return costInEuro * euro
}
console.log(converter(250));