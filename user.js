console.log("Welcome to User Registration");
var userInput = require('readline-sync');

//RegexPatterns
const NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");
const EMAIL_PATTERN = new RegExp("^[A-Za-z0-9+-]+(\\.[A-Za-z0-9-]+)*@+[A-Za-z0-9-]+(\\.[A-Za-z0-9]{2,}){1,2}$");
const PHONE_NUMBER_PATTERN = new RegExp("^[0-9]{2}[ ][0-9]{10}$");
const PASSWORD_PATTERN = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

class UserRegistration {

    checkValidUserInput(userInput, regexPattern) {
        if (regexPattern.test(userInput)) {
            console.log("Valid Input");
            return true;
        } else {
            console.log("Invalid Input Re-enter it");
            return false;
        }
    }

    firstName = () => {
        let firstname = userInput.question("Enter First Name : ");
        if (this.checkValidUserInput(firstname, NAME_PATTERN)) {
            this.lastName();
        } else {
            this.firstName();
        }
    }

    lastName = () => {
        let lastname = userInput.question("Enter Last Name : ");
        if (this.checkValidUserInput(lastname, NAME_PATTERN)) {
            this.email();
        } else {
            this.lastName();
        }
    }

    email = () => {
        let emailId = userInput.question("Enter Email : ");
        if (this.checkValidUserInput(emailId, EMAIL_PATTERN)) {
            this.phoneNumber();
        } else {
            this.email();
        }
    }

    phoneNumber = () => {
        let phoneNum = userInput.question("Enter PhoneNumber : ");
        if (this.checkValidUserInput(phoneNum, PHONE_NUMBER_PATTERN)) {
            this.password();
        } else {
            this.phoneNumber();
        }
    }

    password = () => {
        let pass = userInput.question("Enter Password : ");
        if (this.checkValidUserInput(pass, PASSWORD_PATTERN)) {
        } else {
            this.password();
        }
    }
}
module.exports = new UserRegistration();