const reverseString = function (word) {
    let string = '';
    for (let i = word.length - 1; i >= 0; i--) {
        string += word[i];
    }
    return string;
};

/* Other solution */
/*
const reverseString = function (word) {
    return word.split('').reverse().join('');
}
*/

// Do not edit below this line
module.exports = reverseString;
