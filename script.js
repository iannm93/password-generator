// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3","4","5","6","7","8","9"];
var specialChar = ["$", "!", "@"];
var passwordInfo = [];
var characterMin = 8;
var characterMax = 128;
var randomString = "";
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
  return (randomString)
  // confirm   if user wants capital characters
}
var capitalChar = confirm("do you want capital letters?")
if (capitalChar) {
  // if yes, add all capital characters to password array
  for (i = 0 ; i < upperCase.length; i++){
  passwordInfo.push(upperCase[i]);
  }
}
  // confirm if user wants lower-case characters
  var lowerChars = confirm ("do you want lower-case letters?")
  if (lowerChars){
    // if yes, add all lower-case characters to password array
    for (j = 0 ; j < lowerCase.length; j++){
      passwordInfo.push(lowerCase[j]);

    }
  }
  // confirm if user wants any special characters 
  var specials = confirm("do you want any special characters")
  if (specials){
    // if yes, add all specials to password array
    for (k = 0 ; k < specialChar.length; k++){
      passwordInfo.push(specialChar[k])

    }
    
  }
  // ask if they want numeric options
  var numeric = confirm("do you want any numeric characters?")
  // if yes, addd numeric  options password array
  if (numeric){
    for (l = 0; l < numbers.length; l++){
      passwordInfo.push(numbers[l])
    }
  }
  // prompt the user for their password length
  var lengthOf = prompt("enter a password length between " + characterMin + " and " + characterMax)
  if(lengthOf >= characterMin && lengthOf <= characterMax){
    var lengthOfNumber = parseInt(lengthOf)
   console.log(lengthOfNumber)
  }
  //  generate random string based on desired parameters
  for ( m =0 ; m < lengthOfNumber; m ++){
    randomString = randomString.concat(passwordInfo[Math.floor(Math.random()*passwordInfo.length)]);
    console.log(typeof lengthOfNumber)

    
  }
    // check if the user confimed at least one of the four options
    // if any of (numeric=true) OR (specials=true) OR (lowers=true) OR  (captials = true), generate pass word and store it as a variable
    // END IF
    // if password length is <= 7 or >= 129, alert user of requirements 
    // END IF
    // if (lowers= true)
    // randomly pick a lower cause letter
    // add it to passwordInfo
    // add join
    // display the string in the box
    

  generatePassword()
console.log(passwordInfo);
console.log(randomString)
