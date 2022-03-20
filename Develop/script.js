


// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Try to guess this password!");

      //PSUEDOCODE: 
  // 1. need to prompt the user for password criteria
  //    a. Password length needs to be between 8-128 characters
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Need to validate the input with at least one character type that will be selected
  // 3. Generate password based on the provided criteria.

  // 4. Display generated password to the page - COMPLETED


  return "Generated password will go here!";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
