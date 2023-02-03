function pigLatin(string) {
    let arr = string.split(" ");
    function matchElem(elem) {
        if (elem[0].match(/[aeiou]/)) {
            return (elem + "ay");
        }
        else {
            let i = 0;
            let cons = "";
            while (!elem[i].match(/[aeiou]/)) {
                cons += elem[i];
                // Add the "u" with the "q" and skip it in the next iteration
                if (elem[i].match(/q/) && elem[i + 1].match(/u/)) {
                    cons += 'u';
                    i = i + 1;
                }
                i++;
            }
            return (elem.slice(i) + cons + "ay");
        }
    }
    let result = arr.map(elem => matchElem(elem));
    return result.join(" ");
};

/* Other solution 
const pigLatin = function(string) {
    return string
      .split(" ")
      .map(word => {
        const index = firstVowelIndex(word);
        const beginning = word.slice(0, index);
        const ending = word.slice(index);
        return `${ending}${beginning}ay`;
      })
      .join(" ");
  };

const firstVowelIndex = function(string) {
    const vowels = string.match(/[aeiou]/g);
    if (vowels[0] == "u" && string[string.indexOf(vowels[0]) - 1] == "q") {
      return string.indexOf(vowels[1]);
    }
    return string.indexOf(vowels[0]);
};
*/

// Do not edit below this line
module.exports = pigLatin;
