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

// Do not edit below this line
module.exports = pigLatin;
