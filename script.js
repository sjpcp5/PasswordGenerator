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
//console.log("The users password length is..", + promptPassLength + " The user chose " + " UC ", + promptUppercase + " LC ", + promptLowercase + " Num ", + promptNumbers + " Special ", + promptSpecialcharac,);
//generator functions - http://www.net-comber.com/charset.html
  var randomFunc = {
    upper: getRandomUpper(),
    lower: getRandomLower(),
    number: getRandomNumber(),
    symbol: getSpecialCharc(),
    length1: promptPassLength,
  };
  
  console.log(upper, lower, number, symbol, length);

  const length = +promptPassLength.value;
  const wantsUpper = promptUppercase;
  const wantsLower = promptLowercase;
  const wantsNumber = promptNumbers;
  const wantsSpecChar = promptSpecialcharac;
  console.log(length, wantsLower, wantsSpecChar, wantsNumber, wantsUpper);
 
  generateBtn.addEventListener("click", () => {
    passwordEl.innerText = generatePass(wantsUpper, wantsLower, wantsSpecChar, wantsNumber, length);
  });

  function generatePass(upper, lower, number, symbol, length){
    let passwordString = '';
    const typesCounted = upper + lower + number + symbol;
    const possibleChars = [{ lower }, {upper}, {number}, {symbol}].filter(item =>
      Object.values(item)[0]);
  console.log(passwordString);
  console.log(possibleChars);
      // If type canceled
      // if(typesCounted === false) {
      //   return '',
      // }
  //for loop for password
    for (let i = 0; i < length; i+=typesCounted) {
      possibleChars.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatePass += randomFunc[funcName]();
        console.log(possibleChars);
      });
    } 
    const chosenPassword = passwordString.slice(0,length);
    console.log(chosenPassword);
    return chosenPassword;
  }
  console.log(generatePass());
  
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
    const symbols = '!@#$%^&*(){}[]=/<>'
    return symbols[Math.floor(Math.random() * symbols.length)];
      };

      console.log(getRandomLower(),getRandomNumber(),getSpecialCharc(),getRandomUpper());
    //   // if they want upper case add one to possibleChars
    //   if (promptUppercase) {
    //   let randomUC = getRandomUpper();
    //   possibleChars.push(randomUC);
    //   }
    //   // if they want lower case ...
    //   if (promptLowercase) {
    //   let randomLC = getRandomLower();
    //   possibleChars.push(randomLC);
    //   }
    //   // if they want numbers .... 
    //   if (promptNumbers) {
    //   let RandomNum = getRandomNumber();
    //   possibleChars.push(RandomNum);
    //   }
    //   // if they want symbols...
    //   if (promptSpecialcharac) {
    //   let RandomSPC = getSpecialCharc();
    //   possibleChars.push(RandomSPC);
    //   }
    //   let randomChoice = Math.floor(Math.random() * possibleChars.length);
    //   chosenPassword =+ possibleChars[randomChoice]
    //   console.log(possibleChars)
    //   };
    //  passwordEl.innerText = chosenPassword;
    // };


