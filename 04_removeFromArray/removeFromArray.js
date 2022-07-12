const removeFromArray = function (array, ...remove) {
    for (let i = 0; i <= remove.length - 1; i++) {
        for (let j = 0; j <= array.length - 1; j++) {
            if (array[j] === remove[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
