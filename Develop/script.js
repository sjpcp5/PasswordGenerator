// Assignment Code

///confirm will return true or false Boolean 
//does the user want uppercase characters
//does the user want lowercase characters
//does the user want special characters 
//does the user want numbers 
//how long does the user want the password to be 

//utilize arrays and math.random to generate a password 
//generator functions - http://www.net-comber.com/charset.html

//variables
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");
var promptUppercase = confirm("Do you want uppercase characters? ");
var promptLowercase = confirm("Do you want lowercase characters? ");
var promptSpecialcharac = confirm("Do you want special characters? ");
var promptNumbers = confirm("Do you want numbers characters? ");
var promptPassLength = prompt("How long do you want the password to be? ");
 
  generateBtn.addEventListener("click", btnCallback);
    function btnCallback (evt) {
      btnCallback = passwordEl
    console.log(evt.target)
  };

    function getRandomUpper(){
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };

    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      };

    function getRandomNumber(){
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        };

    function getSpecialCharc(){
      return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
        };

//functions to generate user's password




    console.log(getRandomLower(),getRandomNumber(),getSpecialCharc(),getRandomUpper());
//console log for enitre if funtions and confirms working together
  console.log("The users password length is..", + promptPassLength + " The user chose " + " UC ", + promptUppercase + " LC ", + promptLowercase + " Num ", + promptNumbers + " Special ", + promptSpecialcharac,);

// for loop and array that gathers all confirmed funcitons to create password
function generatePass(){
  var passwordString = ''
  for (var i = 0; i < promptPassLength; i++) {
    var possibleChars = []
    // if they want upper case add one to possibleChars
    if (promptUppercase == 1) {
      getRandomUpper()
    possibleChars.push()
    console.log(possibleChars)
    };
    // if they want lower case ...
    if (promptLowercase == 1) {
  
    };
    // if they want symbols ....
    if (promptNumbers == 1) {
  
    };
    // if they want numbers ...
    if (promptSpecialcharac == 1) {
    

    };

    let randomChoice = Math.random() * possibleChars.length
    passwordString += possibleChars[randomChoice]
  }; 
  console.log() 
  };
// Write password to the #password input
// function writePassword() {
//   var passwordEL = generatePassword();
//     passwordText.value = passwordEL;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
//   arrayPass();
// };

function copyToClipboard() {
  // BONUS 
};

// Add event listener to generate button
generateBtn.addEventListener("click", arrayPass);
generateBtn.addEventListener("click", btnCallback);
function btnCallback (evt) {
  const rnd = arrayPass();
  .append(rnd);

  console.log(evt.target);
  
}
