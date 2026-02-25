//print hello world//
console.log("Hello World");
//Add two number//
let a = 10;
let b = 5;
let sum = a + b;
console.log("Sum is: " + sum);
//Check Even or Odd//
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
//Simple Function//
function greet(name) {
    console.log("Hello " + name);
}

greet("Jerry");
//Simple For Loop//
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Get User Input (Browser)//
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Welcome " + name);   // ✅ use console.log instead of alert
  rl.close();
});