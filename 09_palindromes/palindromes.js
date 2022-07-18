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

// Do not edit below this line
module.exports = palindromes;
