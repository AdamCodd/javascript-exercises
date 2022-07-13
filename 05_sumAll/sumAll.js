let sumAll = function (a, b) {
    let sum = 0;
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) return 'ERROR';
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    }
    if (b < a) {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }

    return sum;
};

/* Other solution */
/*

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; // Better use of "Number.isInteger()" instead of "typeof" for Infinite and NaN value
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

*/

// Do not edit below this line
module.exports = sumAll;
