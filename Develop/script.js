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
generatePass();

function generatePass(){
  var passwordString = localStorage.getItem("passwordString")

  for (var i = 0; i < promptPassLength; i++) {
    var possibleChars = []
    // if they want upper case add one to possibleChars
    if (promptUppercase === 1) {
      possibleChars.push(getRandomUpper());
      
    };
    // if they want lower case ...
    if (promptLowercase == 1) {
    possibleChars.push(getRandomLower());
    
    };
    // if they want symbols ....
    if (promptSpecialcharac == 1) {
    possibleChars.push(getSpecialCharc());
  
    };
    // if they want num ...
    if (promptNumbers == 1) {
    possibleChars.push(getRandomNumber());
    };

    let randomChoice = Math.random() * possibleChars.length
    passwordString += possibleChars[randomChoice];
  
  }; 
  passwordEl.textContent = passwordString;
  console.log(passwordString);  
}
// Write password to the #password input
// function writePassword() {
//   var passwordEL = generatePassword();
//     passwordText.value = passwordEL;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
//   arrayPass();
// };



// Add event listener to generate button

generateBtn.addEventListener("click", function(event){
    event.preventDefault();
    var passwordString = document.querySelector('#password').nodeValue;

    passwordEl.append(passwordString);
    localStorage.setItem(passwordString);
    generatePass();
    
    
    

    if (passwordString === "");{
      displayMessgae("error", "password length cannot be blank");
    };
    
    
    

    console.log(generateBtn)
});


function newFunction() {
  return String.passwordString;
}
// generateBtn.addEventListener("click", arrayPass);
// generateBtn.addEventListener("click", btnCallback);
// function btnCallback (evt) {
//   const rnd = arrayPass();
//   .append(rnd);

//   console.log(evt.target);
  
// }
