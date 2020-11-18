// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3","4","5","6","7","8","9"];
let specialChar = ["$", "!", "@", "#", "%", "^", "*", ")", "("];
let passwordInfo = [];
let characterMin = 8;
let characterMax = 128;
let randomString = "";    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  return (randomString)
  // confirm   if user wants capital characters
}
let capitalChar = confirm("do you want capital letters?")
if (capitalChar) {
  // if yes, add all capital characters to password array
  for (i = 0 ; i < upperCase.length; i++){
  passwordInfo.push(upperCase[i]);
  }
}
  // confirm if user wants lower-case characters
  let lowerChars = confirm ("do you want lower-case letters?")
  if (lowerChars){
    // if yes, add all lower-case characters to password array
    for (j = 0 ; j < lowerCase.length; j++){
      passwordInfo.push(lowerCase[j]);

    }
  }
  // confirm if user wants any special characters 
  let specials = confirm("do you want any special characters")
  if (specials){
    // if yes, add all specials to password array
    for (k = 0 ; k < specialChar.length; k++){
      passwordInfo.push(specialChar[k])

    }
    
  }
  // ask if they want numeric options
  let numeric = confirm("do you want any numeric characters?")
  // if yes, addd numeric  options password array
  if (numeric){
    for (l = 0; l < numbers.length; l++){
      passwordInfo.push(numbers[l])
    }
  }
  // prompt the user for their password length
  let lengthOf = prompt("enter a password length between " + characterMin + " and " + characterMax)
  if(lengthOf >= characterMin && lengthOf <= characterMax){
    lengthOf = parseInt(lengthOf)
   
  }
  //  generate random string based on desired parameters
  for ( m =0 ; m < lengthOf; m ++){
    randomString = randomString.concat(passwordInfo[Math.floor(Math.random()*passwordInfo.length)]);
    
  }

  generatePassword()

