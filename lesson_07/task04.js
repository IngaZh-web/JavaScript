'use strict'

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];


	const arrSum = allСashbox.map(subArr => subArr.flat(Infinity).reduce((subSum, item) => (subSum * item)));

	const average =  arrSum.reduce((acc, c) => acc + c / arrSum.length, 0);

console.log(arrSum);
console.log(average);



