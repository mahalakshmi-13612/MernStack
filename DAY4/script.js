let name = "Alex";
let age = 22;
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent)
let a = 10, b = 20;
console.log(`Before swap: a = ${a}, b = ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`After swap: a = ${a}, b = ${b}`);
console.log("Prediction for Q4: 10 (Primitive values are copied)");
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area (Q5):", area);
function arithmeticOps(num1, num2) {
    console.log(`Sum: ${num1 + num2}`);
    console.log(`Difference: ${num1 - num2}`);
    console.log(`Product: ${num1 * num2}`);
    console.log(`Quotient: ${num1 / num2}`);
    console.log(`Remainder: ${num1 % num2}`);
}
console.log("\n--- Q6 Arithmetic ---");
arithmeticOps(12, 4);
console.log("\n--- Q7 Predictions ---");
console.log(5 + "5");
console.log(5 - "2");
console.log(true + 1);
function checkNum(n) {
    if (n > 100) console.log(`${n} is Greater than 100`);
    else if (n === 100) console.log(`${n} is Equal to 100`);
    else console.log(`${n} is Less than 100`);
}
console.log("\n--- Q8 Number Check ---");
checkNum(150);
checkNum(100);
checkNum(50);
console.log("\n--- Q9 Equality ---");
console.log(`5 == "5" is ${5 == "5"}`);
console.log(`5 === "5" is ${5 === "5"}`);
let personAge = 25;
let eligible = (personAge >= 18 && personAge <= 60);
console.log("\n--- Q10 Eligibility ---");
console.log("Eligible:", eligible);
function isEvenOrOdd(num) {
    if (num % 2 === 0) console.log("Even");
    else console.log("Odd");
}
console.log("\n--- Q11 Even/Odd ---");
isEvenOrOdd(7);
isEvenOrOdd(10);
console.log("\n--- Q12 FizzBuzz ---");
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) console.log("FizzBuzz");
    else if (n % 3 === 0) console.log("Fizz");
    else if (n % 5 === 0) console.log("Buzz");
    else console.log(n);
}
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(7);
function getWeekday(dayNum) {
    switch (dayNum) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        case 7: console.log("Sunday"); break;
        default: console.log("Invalid day");
    }
}
console.log("\n--- Q13 Switch ---");
getWeekday(3);
console.log("\n--- Q14 For Loop (Evens) ---");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}
let N = 5;
let sum = 0;
let counter = 1;
while (counter <= N) {
    sum += counter;
    counter++;
}
console.log("\n--- Q15 While Loop Sum ---");
console.log(`Sum of 1 to ${N} is ${sum}`);
console.log("\n--- Q16 Break/Continue ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}
function add(x, y) {
    return x + y;
}
console.log("\n--- Q17 Add Function ---");
console.log("Sum:", add(10, 20));
const addArrow = (x, y) => x + y;
console.log("\n--- Q18 Arrow Function ---");
console.log("Sum:", addArrow(10, 20));
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("\n--- Q19 Prime Check ---");
console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log("\n--- Q20 Reverse String ---");
console.log("hello ->", reverseStr("hello"));
console.log("\n--- Q21 Prediction ---");
console.log("Prediction: The function returns undefined immediately, so 'Hello' is never printed.");
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
console.log("\n--- Q22 Largest in Array ---");
console.log("Max in [10, 5, 20, 8]:", findLargest([10, 5, 20, 8]));
function getGrade(marks) {
    if (marks >= 90) return 'A';
    if (marks >= 75) return 'B';
    if (marks >= 50) return 'C';
    return 'Fail';
}

console.log("\n--- Q23 Student Grades ---");
let studentScore = 85;
let grade = getGrade(studentScore);
console.log(`Marks: ${studentScore}, Grade: ${grade}`);
