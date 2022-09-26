const caesar = function (word, offset) {
    let code;
    let string = [];
    let char;
    let start;
    let end;
    for (i = 0; i < word.length; i++) {
        char = word.charCodeAt(i);
        if (word[i].match(/[A-Z]/g) != null) {
            start = "A".charCodeAt(0);
            end = "Z".charCodeAt(0);
        }
        if (word[i].match(/[a-z]/g) != null) {
            start = "a".charCodeAt(0);
            end = "z".charCodeAt(0);
        }

        if (offset > 0) {
            if ((char + offset % 26) > end) {
                code = (offset % 26 + char) % end;
                code = start - 1 + code;
                //code = (offset + char - start) % 26 + start; alternative
            }
            else {
                code = offset % 26 + char;
            }
        }

        if (offset < 0) {
            if ((char - Math.abs(offset % 26)) < start) {
                code = start % (char - Math.abs(offset % 26));
                code = end + 1 - code;
            }
            else {
                code = char - Math.abs(offset % 26);
            }
        }

        string[i] = String.fromCharCode(code);

        if (word[i].match(/[A-Za-z]/g) == null) {
            string[i] = word[i];
        }
    }
    word = string.join("");
    return word;
};
//npm test XXX.spec.js
// Other solution
/*

const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

// this function is just a fancy way of doing % so that it works with negative numbers
// see this link for details:
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};






*/


// Do not edit below this line
module.exports = caesar;
