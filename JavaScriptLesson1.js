/**
 * Lesson 1: Introduction to JavaScript and Primitives
 */

// Introduction to JavaScript
console.log("Welcome to JavaScript!");

// Variables and Primitive Data Types
let undefinedVariable; // This variable is undefined because it is declared but not initialized
console.log("Undefined Variable:", undefinedVariable);

let nullVariable = null; // This variable is explicitly set to null
console.log("Null Variable:", nullVariable);

let booleanVariable = true; // This variable holds a boolean value
console.log("Boolean Variable:", booleanVariable);

let numberVariable = 42; // This variable holds a number
console.log("Number Variable:", numberVariable);

let bigintVariable = 9007199254740991n; // This variable holds a bigint
console.log("BigInt Variable:", bigintVariable);

let stringVariable = "Hello, World!"; // This variable holds a string
console.log("String Variable:", stringVariable);

let symbolVariable = Symbol("unique"); // This variable holds a symbol
console.log("Symbol Variable:", symbolVariable);

// Type Coercion and Comparison
let coercedVariable = "5" + 1; // JavaScript will coerce the number 1 into a string and concatenate
console.log("Coerced Variable:", coercedVariable);

let equalVariable = "5" == 5; // == performs type coercion, so this will be true
console.log("Equal Variable (Loose Comparison):", equalVariable);

let strictEqualVariable = "5" === 5; // === does not perform type coercion, so this will be false
console.log("Strict Equal Variable (Strict Comparison):", strictEqualVariable);



/**
 * Lesson 2: Dive into Strings and Numbers
 */

// Strings
let stringMethodsVariable = "JavaScript is fun!";
console.log("Upper Case:", stringMethodsVariable.toUpperCase());
console.log("Lower Case:", stringMethodsVariable.toLowerCase());
console.log("Character at Index 4:", stringMethodsVariable.charAt(4));

// Template Literals
let age = 30;
console.log(`I am ${age} years old!`);

// Numbers and Math Object
let floatVariable = 3.14;
console.log("Rounded Number:", Math.round(floatVariable));




/**
 * Lesson 3: Objects in JavaScript
 */

// Creating Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28
};
console.log("Person Object:", person);

// Accessing and Modifying Properties
console.log("First Name:", person.firstName);
person.age = 29;
console.log("Updated Age:", person.age);

// Methods
person.sayHello = function() {
  console.log("Hello, my name is " + this.firstName);
};
person.sayHello();

// Nested Objects
person.address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA"
};
console.log("City:", person.address.city);

// Object Destructuring
let { firstName, lastName } = person;
console.log("Destructured Name:", firstName, lastName);



/**
 * Lesson 4: Arrays and Array Methods
 */

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits);

// Accessing Array Elements
console.log("First Fruit:", fruits[0]);

// Array Methods
fruits.push("Date");
console.log("Fruits Array After Push:", fruits);

let lastFruit = fruits.pop();
console.log("Last Fruit:", lastFruit);
console.log("Fruits Array After Pop:", fruits);

// Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element in Second Row, Third Column:", matrix[1][2]);



/**
 * Lesson 5: Review and Best Practices
 */

// Review
console.log("Reviewing Primitives, Objects, and Arrays...");

// Best Practices
console.log("Remember to always declare variables, avoid global scope, and keep your code clean and maintainable!");


