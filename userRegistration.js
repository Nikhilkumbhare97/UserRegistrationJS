console.log("Welcome To User Registration Problem");
let userInput = require("readline-sync");

//RegexPatterns
const NAME_PATTERN = "^[A-Z]{1}[a-z]{2,}$";
const EMAIL_PATTERN = "^[A-Za-z0-9+-]+(\\.[A-Za-z0-9-]+)*@+[A-Za-z0-9-]+(\\.[A-Za-z0-9]{2,}){1,2}$";
const PHONE_NUMBER_PATTERN = "^[0-9]{2}[ ][0-9]{10}$";

let firstName = userInput.question("Enter your First Name : ");
if (firstName.match(NAME_PATTERN)) {
    console.log("Valid FirstName");
} else {
    console.log("Invalid FirstName");
}

let lastName = userInput.question("Enter your Last Name : ");
if (lastName.match(NAME_PATTERN)) {
    console.log("Valid LastName");
} else {
    console.log("Invalid LastName");
}

let email = userInput.question("Enter your Email : ");
if (email.match(EMAIL_PATTERN)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

let phoneNumber = userInput.question("Enter your phoneNumber : ");
if (phoneNumber.match(PHONE_NUMBER_PATTERN)) {
    console.log("Valid PhoneNumber");
} else {
    console.log("Invalid PhoneNumber");
}