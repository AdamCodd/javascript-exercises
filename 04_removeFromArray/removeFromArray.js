const removeFromArray = function (array, ...args) {
    for (let i = 0; i <= args.length - 1; i++) {
        for (let j = 0; j <= array.length - 1; j++) {
            if (array[j] === args[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

/*********** Other solutions **********/
// First Solution

/* 
const removeFromArray = function (...args) {
  const array = args[0];
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
    return newArray;
};
*/

// Second solution
/*
var removeFromArray = function(...args) {
   const array = args[0]
   return array.filter(val => !args.includes(val))
}
*/


// Do not edit below this line
module.exports = removeFromArray;
