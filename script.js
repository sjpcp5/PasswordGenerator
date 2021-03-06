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
// function to prompt user for password options
function checkUserResponse() {

  var promptPassLength = parseInt(prompt("How long do you want the password to be? "));
  console.log(promptPassLength);


  if (isNaN(promptPassLength) === true) {
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
  console.log(promptUppercase);
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
  var passOptions = {
    promptPassLength: promptPassLength,
    promptLowercase: promptLowercase,
    promptNumbers: promptNumbers,
    promptSpecialcharac: promptSpecialcharac,
    promptUppercase: promptUppercase,
  };
  return passOptions;
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


function getAnyRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randThing = arr[randIndex];

  return randThing;
}


//functions to generate user's password
// for loop and array that gathers all confirmed funcitons to create password
//utilize arrays and math.random to generate a password
function generatePass() {
  var options = checkUserResponse();
 
  //passwordEl = localStorage.getItem("passwordString")
  var result = [];
  var possibleChars = [];
  var guaranteedCharacters = [];

  // if they want upper case add one to possibleChars
  if (options.promptUppercase) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    let randomUpper = getRandomUpper();
    guaranteedCharacters.push(randomUpper);
    console.log(possibleChars);
  }


  // if they want lower case ...
  if (options.promptLowercase) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    let randomLower = getRandomLower();
    guaranteedCharacters.push(randomLower);
  }


  // if they want symbols ....
  if (options.promptSpecialcharac) {
    possibleChars = possibleChars.concat(specialCharacters);
    let randomChar = getSpecialCharc();
    guaranteedCharacters.push(randomChar);
  }

  // if they want num ...
  if (options.promptNumbers) {
    possibleChars = possibleChars.concat(numericCharacters);
    let randomNumber = getRandomNumber();
    guaranteedCharacters.push(randomNumber);
    console.log(possibleChars);
    console.log(guaranteedCharacters)
  }

  for (var i = 0; i < options.promptPassLength; i++) {
   let singleChar = getAnyRandom(possibleChars);
    /* let randomIndex = Math.floor(Math.random() * possibleChars.length)
    var passwordString = + possibleChars[randomIndex]; */
   result.push(singleChar);
  }
  // mixing in on of each character into the result
  for (var i= 0; i < guaranteedCharacters.promptPassLength; i++){
    result[i]=guaranteedCharacters[i];
  }
  return result.join("");
};

function writePassword(){
var password = generatePass();
passwordEl.value = password;
console.log(password);
};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



