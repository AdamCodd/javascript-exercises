// Get words from the user until "enter" is typed and display it in alphabetical order
let list = [];
let input;
while (true) {
    input = prompt('Type your words');
    if (input === '' || input.match(/[^a-z]/gi)) break;
    list.push(input);
}
console.log(list.sort());