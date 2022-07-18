let array = ["aaaaa", "bbbbbb", "cccc", "ddd", "esssssssss", "fd", "gddddddddd", "hzzzzz"];
function sort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i].length > list[i + 1].length) {
            let temp = list[i + 1];
            list[i + 1] = list[i];
            list[i] = temp;
            i = -1; // Trick to get it to i = 0 at the next iteration
        }
    }
    return list;
}
sort(array);
