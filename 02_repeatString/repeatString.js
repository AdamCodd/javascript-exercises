const repeatString = function (string, repeat) {
    if (repeat > 0) {
        return string.padEnd(string.length * repeat, string);
    }
    else if (repeat === 0 || string === '') {
        return '';
    }
    else {
        return 'ERROR';
    }
};

/* Other solution */
/*
const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
*/

// Do not edit below this line
module.exports = repeatString;
