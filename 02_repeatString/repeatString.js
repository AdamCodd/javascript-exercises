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

// Do not edit below this line
module.exports = repeatString;
