const getTheTitles = function (books) {
    titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });
    return titles;
};

/***** Other solution *********/
/*

const getTheTitles = function(array) {
  return array.map(book => book.title);
};

module.exports = getTheTitles;
*/

// Do not edit below this line
module.exports = getTheTitles;
