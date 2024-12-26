//question 31 : What is an array in JavaScript? Write an example.
//Answer : An array in JavaScript is a special variable that can hold multiple values at once.
// It is an ordered collection of items, which can be of any data type (numbers, strings, objects, etc.).
// Arrays are zero-indexed, meaning the first element is at index 0.



// Example:
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]); 
console.log(fruits[2]); 

fruits[1] = "Blueberry";
console.log(fruits); 

fruits.push("Elderberry");
console.log(fruits); 
console.log(fruits.length); 