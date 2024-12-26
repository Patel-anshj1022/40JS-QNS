//Question 36 : What is a loop in JavaScript, and why do we use it?
//Answer : 1) for loop: Used when the number of iterations is known in advance.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//2)while loop: Executes a block of code as long as a specified condition is true.
// The condition is checked before each iteration.
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


//3) do-while loop: Similar to a while loop, but it executes the block of code at least once,
// before checking the condition.
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

