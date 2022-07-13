const ftoc = function (farenheit) {
  let celcius = 0;
  return celcius = Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (celcius) {
  let farenheit = 0;
  return farenheit = Math.round((celcius * (9 / 5) + 32) * 10) / 10;
};

/* Solution */
/*
const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};
*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
