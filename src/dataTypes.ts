// any type
let firstName; // firstName of type any

// Array of numbers
const numbers: number[] = [1, 2, 3];

// Array of strings
const names: string[] = ["bilel", "radhouen", "iskander"];

// Array of any type
const array: any[] = [1, "mohamed"];

// Tuple in typescript
// A tuple is a typed array with a pre-defined length and types for each index.
const employee: [number, string] = [1, "bilel"];

// Enum
// An enum is a special class that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// by default, enums will initialize the first value to 0 and add 1 to each additional value

enum Size {
  Small,
  Medium,
  Large,
}

// Functions in typescript
// 1- without return type (void)
function sum1(number1: number, number2: number): void {
  const result = number1 + number2;
  console.log(result);
}

// 2- with return type
function sum2(number1: number, number2: number): number {
  const result = number1 + number2;
  return result;
}

// Objects
console.log("\x1b[35m", "-----------------Objects---------------");

// type alias
type User = {
  readonly id: number; // we cannot change the id value
  username?: string; // optional
  email: string;
  password: string;
  isAdmin: boolean;
  getFullName: (fullName: string) => string;
};

const user: User = {
  id: 1,
  username: "bilel askri",
  email: "askribilel09@gmail.com",
  password: "easypassword",
  isAdmin: true,
  getFullName: (fullName: string) => {
    return fullName;
  },
};

console.log(user);

// Union type
console.log("\x1b[35m", "-----------Union type-----------------");
let userInput: string | number = "bilel";
userInput = 1234;
console.log(userInput);
console.log("\x1b[35m", "-----------Intersection type-----------------");
type Author = {
  authorName: string;
  country: string;
};

type Deatils = {
  title: string;
  price: number;
};

type Book = Author & Deatils;
const book: Book = {
  title: "typescript",
  price: 12,
  authorName: "bilel",
  country: "tunisia",
};

console.log(book);

console.log("\x1b[35m", "-----------Literal type-----------------");
type Price = 10 | 20;
let price: Price = 10;
price = 20;
book.price = price;
console.log(book);

console.log("\x1b[35m", "----------- unknown & never type -----------------");
/*
The unknown type is safer than any. When a variable is of type unknown, 
you cannot perform any operations on it without first performing a type check or assertion
*/
function checkTypes(input: unknown) {
  if (typeof input === "string") {
    input = input.toUpperCase();
    console.log(input);
  }

  if (typeof input === "number") {
    input = input.toFixed(2);
    console.log(input);
  }

  if (typeof input === "boolean") {
    input = input.valueOf();
    console.log(input);
  }
}

checkTypes(21.1254);

// never type used as a return type
/*
the differnce between void and never type is: void reach the end of the function but never type never reach it
 */
function generateError(message: string) {
  throw new Error(message);
  console.log("this code vener gonna work");
}
