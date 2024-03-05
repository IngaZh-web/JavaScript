"use strict";

const getLeapYears = (n, m) => {
  const result = [],
    isLeapYear = (y) => {
      return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    };
  for (let year = n; year <= m; year++) {
    if (isLeapYear(year))
		result.push(year);
  }

  return result;
};

console.log(getLeapYears(2000, 2024));
