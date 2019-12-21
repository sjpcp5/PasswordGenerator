// Assignment Code

///confirm will return true or false Boolean 
//does the user want uppercase characters
//does the user want lowercase characters
//does the user want special characters 
//does the user want numbers 
//how long does the user want the password to be 

//utilize arrays and math.random to generate a password 
//generator functions - http://www.net-comber.com/charset.html

var generateBtn = document.querySelector("#generate");
 
  generateBtn.addEventListener("click", btnCallback);
    function btnCallback (evt) {

    console.log(evt.target)
};




var promptUppercase = confirm("Do you want uppercase characters? ");
  
if (promptUppercase === 1) {
    function getRandomUpper(){
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
};
  


var promptLowercase = confirm("Do you want lowercase characters? ");



  function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
  console.log(getRandomLower());


var promptSpecialcharac = confirm("Do you want special characters? ");



var promptNumbers = confirm("Do you want numbers characters? ");

  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  console.log(getRandomNumber());

var promptPassLength = prompt("How long do you want the password to be? ");
  
  
  console.log("The users password length is..", + promptPassLength + " The user chose " + " UC ", + promptUppercase + " LC ", + promptLowercase + " Num ", + promptNumbers + " Special ", + promptSpecialcharac,);








// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
