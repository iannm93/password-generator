// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C"];
var lowerCase = ["a", "b", "c"];
var numbers = ["0", "1", "2"];
var specialChar = ["$", "!", "@"];
var passwordInfo = [];
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  return "";
  // confirm   if user wants capital characters
}
var capitalChar = confirm("do you want capital letters?")
if (capitalChar) {
  for (i = 0 ; i < upperCase.length; i++){
  passwordInfo.push(upperCase[i]);
  }
  var specials = confirm("do you want any special characters")
  if (specials){
    for (i = 0 ; i < specialChar.length; i++){
      passwordInfo.push(specialChar[i])
    }
  }
  // if yes , add special character
  // prompt user for password length
  var passwordLength = prompt("how many characters do you want your password to be")
  // generate a random number based on response 
  // check if password length is between 8 and 128
  if (passwordLength > 8 && passwordLength < 128) {
    passwordInfo.push(passwordLength)
    console.log(passwordInfo)
    // if password is not betweewn 8 and 128 
    // prompt user to correct it
    // else confirm if they want special characters
    // if yes, add capitals
    // if not , don't 
    // ask if they want numeric options
    var numericChar = confirm("do you want numeric options?")
    // if yes, addd numeric options
    // if not, don't
    // validate that at least one criteria has been selected 
    //  generate random string based on desired parameters
    // display the string in the box
  }
}
console.log(passwordInfo);
