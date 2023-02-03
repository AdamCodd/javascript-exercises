// Missing number using Gauss method

// Array from 1 to n with a missing number
let arr = [1, 4, 5, 6, 3, 7, 8, 9];
const miss = (arr) => {
    let n, total, sum;
    n = arr.length + 1; // "arr.length + 1" => Takes in account the missing number from the array
    total = (n * (n + 1)) / 2;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (total - sum);
};
miss(arr); // Return "2"
