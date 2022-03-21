var passwordLength = [];
var optionsArray = "";

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
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.textContent = newPassword;
  } else {
      passwordText.textContent = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * optionsArray.length)
      password = password + optionsArray[randomIndex];
  }
  return password;
}

function createPrompts() {
  var lowerCaseCriteria = false;
  var upperCaseCriteria = false;
  var numbersCriteria = false;
  var specialCriteria = false;
 
  passwordLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be at least 8 characters and no more than 128.");
      return false;
  }

  if (confirm("It is recommended that you include lowercase letters in your password.")) {
      optionsArray += lowerCaseArray;
      lowerCaseCriteria = true
  }

  if (confirm("It is recommended that you include uppercase letters in your password.")) {
      optionsArray += upperCaseArray;
      upperCaseCriteria = true
  }

  if (confirm("It is recommended that you include numbers in your password.")) {
      optionsArray += numbersArray;
      numbersCriteria = true
  }

  if (confirm("It is recommended that you include special characters in your password.")) {
      optionsArray += specialCharArray;
      specialCriteria = true
  }
  
  if (!lowerCaseCriteria || !upperCaseCriteria || !numbersCriteria || !specialCriteria) {
    alert("You must select at least one character type.")
    createPrompts();
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
