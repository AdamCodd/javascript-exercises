const fibonacci = function (num) {
    let suite = [];
    let n = 1;
    num = Number.parseInt(num);
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return n;
    for (i = 0; i < num; i++) {
        if (i === 0 || i === 1) suite.push(n);
        if (i >= 1) {
            n = suite[i] + suite[i - 1];
            suite.push(n);
        }
    }
    return suite[num - 1];
};

/** Other solution ****/
/*
const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  };
*/

// Do not edit below this line
module.exports = fibonacci;
