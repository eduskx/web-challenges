console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 4;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10_000_000;
let price = 0;

if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2;
  console.log("price: " + price + "€");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
  console.log("price: " + price + "€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1_000_000) {
  console.log("price: " + numberOfHotdogs + "€");
} else {
  price = numberOfHotdogs * 0.1;
  console.log("price: " + price + "€");
}

// Part 4: Daytime
const currentHour = 17;

let statement = "";

currentHour < 17
  ? (statement = "Still need to learn...")
  : (statement = "Partytime!!!");

console.log(statement);

// Part 5: Greeting
const userName = "Roland";

const greeting = "Hello " + (userName === "Roland" ? "Coach" : userName) + "!";

console.log(greeting);
