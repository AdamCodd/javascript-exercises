let input;
while (true) {
    input = prompt('Talk to your grandma!');
    if (input === "BYE") break;
    if (input === input.toUpperCase()) {
        alert('NO, NOT SINCE 19' + Math.floor(Math.random() * 100));
    }
    else {
        alert('HUH?! SPEAK UP, SONNY!');
    }
}