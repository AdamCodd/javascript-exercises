const snakeCase = function (string) {
    return string.replace(/(^[a-z]+)([A-Z])/g, "$1 $2")
        .toLowerCase()
        .replace(/\.{1,}|[\s\-]/g, "_")
        .replace(/(,|[^a-z]+$)/g, "");
};

/* Other solution */
/* const snakeCase = function(string) {
  // wtf case
  string = string.replace(/\.\./g, " ");

  // this splits up camelcase IF there are no spaces in the word
  if (string.indexOf(" ") < 0) {
    string = string.replace(/([A-Z])/g, " $1");
  }

  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\-/g, " ")
    .split(" ")
    .join("_");
};
*/

// Do not edit below this line
module.exports = snakeCase;
