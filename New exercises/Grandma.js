// Improved Grandma, the program stops when the user input "BYE" three times.

let input;
let num = 0;
while (true) {
    input = prompt('Talk to your grandma!');
    if (input === input.toUpperCase()) {
        alert('NO, NOT SINCE 19' + Math.floor(Math.random() * 100));
        if (input === "BYE") {
            num++;
            if (num === 3) {
                break;
            }
        } else {
            num = 0;
        }
    }
    else {
        alert('HUH?! SPEAK UP, SONNY!');
        num = 0;
    }
}
