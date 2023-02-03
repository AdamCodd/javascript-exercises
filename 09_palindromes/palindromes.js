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

/*
 //Solution - Algo : Test if the string is a palindrome =/= reversing the string and compare to the non-reversed string
const palindromes = (string) => {
  let test = true;
  let str = string.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < str.length / 2; i++) {
    let firstpart = str[i];
    let lastpart = str[str.length - i - 1];
    if (firstpart !== lastpart) {
      return false;
    }
  }
  return test;
};
*/


// Do not edit below this line
module.exports = palindromes;
