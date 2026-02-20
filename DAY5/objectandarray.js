"use strict";

/*
========================================
OBJECT LITERALS + METHODS + THIS
========================================
*/

const user = {
  name: "Sam",
  age: 27,
  isAdmin: false,

  // Normal function → correct use of `this`
  greet() {
    return `Hello ${this.name}`;
  }
};

console.log("Greet:", user.greet());

// Arrow function (incorrect for object methods)
const wrongUser = {
  name: "John",
  greet: () => {
    return `Hello ${this.name}`; // undefined in strict mode
  }
};

console.log("Wrong Greet:", wrongUser.greet());


/*
========================================
DESTRUCTURING
========================================
*/

const person = {
  name: "Alice",
  age: 30,
  address: {
    city: "Chennai",
    pincode: 600001
  }
};

// Basic destructuring
const { name, age } = person;
console.log("Destructured:", name, age);

// Rename
const { name: username } = person;
console.log("Renamed:", username);

// Default value
const { role = "user" } = person;
console.log("Default role:", role);

// Nested destructuring
const { address: { city } } = person;
console.log("City:", city);


/*
========================================
ARRAY METHODS
========================================
*/

const numbers = [1, 2, 3, 4, 5];

/* map() */
const doubled = numbers.map(n => n * 2);
console.log("Map (doubled):", doubled);

/* forEach() */
console.log("forEach:");
numbers.forEach(n => console.log(n));

/* filter() */
const even = numbers.filter(n => n % 2 === 0);
console.log("Filter (even):", even);

/* reduce() */
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum):", sum);

/* some() */
const hasGreaterThanFour = numbers.some(n => n > 4);
console.log("Some (>4):", hasGreaterThanFour);

/* every() */
const allPositive = numbers.every(n => n > 0);
console.log("Every (>0):", allPositive);

/* find() */
const found = numbers.find(n => n === 3);
console.log("Find (3):", found);

/* sort() */

// Incorrect sort (string comparison)
console.log("Wrong Sort:", [10, 5, 20].sort());

// Correct numeric sort (ascending)
console.log("Correct Sort Asc:", [10, 5, 20].sort((a, b) => a - b));

// Correct numeric sort (descending)
console.log("Correct Sort Desc:", [10, 5, 20].sort((a, b) => b - a));


/*
========================================
REAL-WORLD STYLE EXAMPLES
========================================
*/

// Convert array to object using reduce
const users = [
  { id: 1, name: "Sam", age: 28 },
  { id: 2, name: "John", age: 32 },
  { id: 3, name: "Alice", age: 25 }
];

const userMap = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log("User Map:", userMap);

// Extract emails (like backend usage)
const emails = users.map(user => `${user.name.toLowerCase()}@mail.com`);
console.log("Emails:", emails);

// Filter users above 28
const filteredUsers = users.filter(user => user.age > 28);
console.log("Filtered Users:", filteredUsers);

// Sort users by age
users.sort((a, b) => a.age - b.age);
console.log("Sorted Users by Age:", users);


/*
========================================
ARRAY DESTRUCTURING
========================================
*/

const arr = [10, 20, 30];

const [first, , third] = arr;
console.log("Array Destructuring:", first, third);


/*
========================================
FINAL SUMMARY OUTPUT
========================================
*/

console.log("\n--- SUMMARY ---");
console.log("map returns new array");
console.log("forEach returns undefined");
console.log("reduce reduces to single value");
console.log("some = at least one match");
console.log("every = all must match");
console.log("sort needs comparator for numbers");
console.log("Arrow functions do not have their own `this`");
console.log("Destructuring makes extraction cleaner");
