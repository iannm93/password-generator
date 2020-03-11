// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '012345678910'
  var specialChar = "~@#$%^&*()_+,<.>/?" 
  var passwordInfo = []

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  // prompt user for password length
  var passwowrdLength = prompt("how many characters do you want your password to be")
  // generate a random number based on response 

  // check if password length is between 8 and 128
  if( passwowrdLength > 8 && passwowrdLength < 128){
    passwordInfo.push(passwowrdLength)
  }
  // if password is not betweewn 8 and 128 
  // prompt user to correct it
  // else confirm if they want special characters
   var specialChar = prompt("do you want any special characters")
  // if yes , add special character
  // prompt user if they want capital characters
  // if yes, add capitals
  // if not , don't 
  // ask if they want numeric options
  var numericChar = confirm("do you want numeric options?")
  // if yes, addd numeric options
  // if not, don't
  // validate that at least one criteria has been selected 
  //  generate random string based on desired parameters
  // display the string in the box
  
  return "";
}
