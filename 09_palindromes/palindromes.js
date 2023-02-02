const palindromes = function (string) {
  let processed = string.toLowerCase().match(/[a-z0-9]/g).join('');
  let reversed = processed.split('').reverse().join('');
  if (processed === reversed) return true;
  return false;
};


/*** Other solution *****/
/*

const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};

*/

/* Solution - Algo 
const palindromes = (string) => {
  let test = true;
  string = string.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < string.length / 2; i++) {
    let firstpart = string[i];
    let lastpart = string[string.length - i - 1];
    if (firstpart !== lastpart) {
      return false;
    }
  }
  return test;
};
*/


// Do not edit below this line
module.exports = palindromes;
