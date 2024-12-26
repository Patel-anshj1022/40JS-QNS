//Question 35 : Write a function that takes an array of numbers and returns their sum.
//Answer :
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));