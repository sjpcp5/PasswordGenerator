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

function checkUserResponse(){

var promptPassLength = parseInt(prompt("How long do you want the password to be? "));
console.log(promptUppercase);
console.log(promptPassLength);


if (isNan(promptPassLength)===true){
  alert("Password length must be provided as a number");
  return;
}

if (promptPassLength < 8) {
  alert("Password length must be at least 8 characters");
  return;
}
if (promptPassLength > 128) {
  alert("Password length must less than 129 characters");
  return;
}
var promptUppercase = confirm("Do you want uppercase characters? ");
var promptLowercase = confirm("Do you want lowercase characters? ");
var promptSpecialcharac = confirm("Do you want special characters? ");
var promptNumbers = confirm("Do you want numbers characters? ");

if (
  promptLowercase === false &&
  promptUppercase === false &&
  promptNumbers === false &&
  promptSpecialcharac === false
) {
  alert("Must select at least one character type");
  return;
};
return; 
};

//console log for enitre if funtions and confirms working together
// console.log("The users password length is..", + promptPassLength + " The user chose " + " UC ", + promptUppercase + " LC ", + promptLowercase + " Num ", + promptNumbers + " Special ", + promptSpecialcharac,);

//generator functions - http://www.net-comber.com/charset.html
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];
function getRandomUpper() {
  let randomIndex = Math.floor(Math.random() * 26);
  let randomUpper = upperCasedCharacters[randomIndex];
  console.log(randomUpper);
  return randomUpper;
};

function getRandomLower() {
  let randomIndex = Math.floor(Math.random() * 26);
  let randomLower = lowerCasedCharacters[randomIndex];
  console.log(randomLower);
  return randomLower;
};

function getRandomNumber() {
  let randomIndex = (Math.floor(Math.random() * 10));
  let randomNumber = numericCharacters[randomIndex];
  console.log(randomNumber);
  return randomNumber;
};

function getSpecialCharc() {
  let randomIndex = (Math.floor(Math.random() * 24));
  let randomSpecialChar = specialCharacters[randomIndex];
  console.log(randomSpecialChar);

  return randomSpecialChar;
};

// console.log(getRandomLower(), getRandomNumber(), getSpecialCharc(), getRandomUpper());
/*function addFromArray(){
  return possibleChars.append(passwordString)
};*/



//functions to generate user's password
// for loop and array that gathers all confirmed funcitons to create password
//utilize arrays and math.random to generate a password
function generatePass() {
  var options = checkUserResponse(); 
  var passwordString = "";
  console.log(passwordString);
  //passwordEl = localStorage.getItem("passwordString")
  var possibleChars = [];
  var guaranteedCharacters = [];
  // if they want upper case add one to possibleChars
  if (promptUppercase) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    let randomUpper = getRandomUpper();
    guaranteedCharacters.push(randomUpper);
    console.log(possibleChars);
  }


  // if they want lower case ...
  if (promptLowercase) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    let randomLower = getRandomLower();
    guaranteedCharacters.push(randomLower);
  }


  // if they want symbols ....
  if (promptSpecialcharac) {
    possibleChars = possibleChars.concat(specialCharacters);
    let randomChar = getSpecialCharc();
    guaranteedCharacters.push(randomChar);
  }

  // if they want num ...
  if (promptNumbers) {
    possibleChars = possibleChars.concat(numericCharacters);
    let randomNumber = getRandomNumber();
    guaranteedCharacters.push(randomNumber);
    console.log(possibleChars);
    console.log(guaranteedCharacters)
  }

  for (var i = 0; i < promptPassLength; i++) {
    /* let randomIndex = Math.floor(Math.random() * possibleChars.length)
    var passwordString = + possibleChars[randomIndex]; */
    console.log(promptPassLength);
    console.log(passwordString);
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
