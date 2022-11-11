// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@','!','#','$','%','^','&','*','(',")"];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K',
'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword Options() {
  var length = parseInt(
    prompt ('How many characters would you like your password to contain?');
    Range (8 to 128)
  );
}
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
};

return passwordOptions;

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  
  {
  return randElement;
}

if (length < 8) {
  alert ('Password must be 8 characters minimum');
  return null;
}

if (length > 128) {
  alert ('Password cannot be more than 128 characters');
  return null;
}

var hasSpecialCharacters = confirm(
  'Click to include special characters.');

var hasNumericCharacters = confirm(
  'Click to include numeric characters.');

var hasLowerCasedCharacters = confirm(
  'Click to include lowercase characters.');

var hasUpperCasedCharacters = confirm(
  'Click to include uppercase characters.');

if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasLowerCasedCharacters === false
  hasUpperCasedCharacters === false &&
) {
  alert('Choose at least one');
  return: null;
}
function generatePassword() 
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null; 
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);