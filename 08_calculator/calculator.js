const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let item = 0;
  array.forEach(num => { item += num; });
  return item;
};

/******* Other solution *********/
/* 

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

*/

const multiply = function (array) {
  let item = array[0];
  for (i = 1; i <= array.length - 1; i++) {
    item *= array[i];
  }
  return item;
};

/***** Other solution **********/
/* const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};
*/

const power = function (a, b) {
  return a ** b;
};

/******* Other solution *****/
/*

const power = function(a, b) {
  return Math.pow(a, b);
};

*/

const factorial = function (n) {
  let ft = 1;
  for (let i = n; i > 0; i--) {
    ft *= i;
  }
  return ft;
};

/*** Other solution (recursion) ******/
/*

const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1);
};
*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
