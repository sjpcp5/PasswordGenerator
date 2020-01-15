// Assignment Code

///confirm will return true or false Boolean
//does the user want uppercase characters
//does the user want lowercase characters
//does the user want special characters
//does the user want numbers
//how long does the user want the password to be


//variables
var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");
var promptUppercase = confirm("Do you want uppercase characters? ");
var promptLowercase = confirm("Do you want lowercase characters? ");
var promptSpecialcharac = confirm("Do you want special characters? ");
var promptNumbers = confirm("Do you want numbers characters? ");
var promptPassLength = prompt("How long do you want the password to be? ");


//console log for enitre if funtions and confirms working together
// console.log("The users password length is..", + promptPassLength + " The user chose " + " UC ", + promptUppercase + " LC ", + promptLowercase + " Num ", + promptNumbers + " Special ", + promptSpecialcharac,);

//generator functions - http://www.net-comber.com/charset.html

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getSpecialCharc () {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

// console.log(getRandomLower(), getRandomNumber(), getSpecialCharc(), getRandomUpper());
/*function addFromArray(){
  return possibleChars.append(passwordString)
};*/


//functions to generate user's password
// for loop and array that gathers all confirmed funcitons to create password
//utilize arrays and math.random to generate a password
function generatePass () {
  var passwordString = "";
  //passwordEl = localStorage.getItem("passwordString")
  var possibleChars = [];

  // if they want upper case add one to possibleChars
  if (promptUppercase) {
    let randomUpper = getRandomUpper();
    possibleChars.push(randomUpper);
  }


  // if they want lower case ...
  if (promptLowercase) {
    let randomLower = getRandomLower();
    possibleChars.push(randomLower);
  }


  // if they want symbols ....
  if (promptSpecialcharac) {
    let randomChar = getSpecialCharc();
    possibleChars.push(randomChar);
  }

  // if they want num ...
  if (promptNumbers) {
    let randomNumber = getRandomNumber();
    possibleChars.push(randomNumber);
  }

  for (var i = 0; i < promptPassLength; i++) {
    

    let randomIndex = Math.floor(Math.random() * possibleChars.length)
    passwordString += possibleChars[randomIndex];
  };

  passwordEl.innerText = passwordString;
};

// console.log("this is my array..", possibleChars);
// console.log("what is my ", randomChoice);

// if (promptUppercase === 1 || promptLowercase === 1 || promptSpecialcharac === 1 || promptNumbers === 1) {
//   addFromArray();
// }

// console.log("this is my chosen password...", passwordString);
// Write password to the #password input
// function writePassword() {
//   var passwordEL = generatePassword();
//     passwordText.value = passwordEL;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
//   arrayPass();
// };



// Add event listener to generate button
// console.log(generateBtn)
generateBtn.addEventListener("click", generatePass);



// generateBtn.addEventListener("click", arrayPass);
// generateBtn.addEventListener("click", btnCallback);
// function btnCallback (evt) {
//   const rnd = arrayPass();
//   .append(rnd);

//   console.log(evt.target);

// }
