'use strict'

let phrase = "привет Мир";

const newPhrase = (phrase) => {
	return phrase[0].toUpperCase().slice(0, 1) + phrase.toLowerCase().slice(1);
}
console.log(newPhrase("привет Мир"))











