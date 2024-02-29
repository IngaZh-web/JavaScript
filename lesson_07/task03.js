'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const prefix = "Mr ";

const newNames = (names, prefix) => names.map(element => prefix + element);
console.log(newNames(names, prefix));



