var passwordLength = 8;
var optionsArray = [];

var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersArray = "0123456789";
var specialCharArray = "!@#$%^&*~`()_{}";

// Assignment code here
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = createPrompts(); //Returns true or false

  if(correctPrompts)
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }


function generatePassword() {
}

function createPrompts() {
  optionsArray = [];
  passwordLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length has to be a number and have a minimum of 8 digits and maximum of 128.");
      return false;
  }

  if (confirm("It is recommended that you include lowercase letters in your password.")) {
      optionsArray = optionsArray.concat(lowerCaseArray);
  }

  if (confirm("It is recommended that you include uppercase letters in your password.")) {
      optionsArray = optionsArray.concat(upperCaseArray);
  }

  if (confirm("It is recommended that you include numbers in your password.")) {
      optionsArray = optionsArray.concat(numbersArray);
  }

  if (confirm("It is recommended that you include special characters in your password.")) {
      optionsArray = optionsArray.concat(specialCharArray);
  }
  return true;

}






    //PSUEDOCODE: 
  // 1. need to prompt the user for password criteria
  //    a. Password length needs to be between 8-128 characters
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Need to validate the input with at least one character type that will be selected
  // 3. Generate password based on the provided criteria.
  // 4. Display generated password to the page - COMPLETED
