const palindromes = function (string) {
    string = string.toLowerCase().match(/[a-z]+/g).join('');
    let reversed = string.split('').reverse().join('');
    if (string === reversed) return true;
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
