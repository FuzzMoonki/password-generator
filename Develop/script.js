// Assignment code here

//create variables for each character type
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//create a prompt for the user to enter a password length between 8 and 128 characters
var passwordLength = prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");


//create a prompt for the user to confirm if they would like to include lowercase letters
var lowercase = confirm("Would you like to include lowercase letters?");

//create a prompt for the user to confirm if they would like to include uppercase letters
var uppercase = confirm("Would you like to include uppercase letters?");

//create a prompt for the user to confirm if they would like to include numbers
var numbers = confirm("Would you like to include numbers?");

//create a prompt for the user to confirm if they would like to include special characters
var specialCharacters = confirm("Would you like to include special characters?");
//


  passwordText.value = password;
} 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page