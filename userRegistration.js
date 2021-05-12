console.log("Welcome To User Registration Problem");
let userInput = require("readline-sync");

//RegexPatterns
const NAME_PATTERN = "^[A-Z]{1}[a-z]{2,}$";

let firstName = userInput.question("Enter your First Name : ");
if (firstName.match(NAME_PATTERN)) {
    console.log("Valid FirstName");
} else {
    console.log("Invalid FirstName");
}