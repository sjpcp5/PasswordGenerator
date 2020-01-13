//DOM Elements
let resultEL = document.getElementsById(‘result’);
let lengthEL = document.getElementsById(‘length’);
let numbersEL = document.getElementsById(‘numbers’);
let symbolsEL = document.getElementsById(‘symbols’);
let generateEL = document.getElementsById(‘generate’);
let clipboardEL = document.getElementsById(‘clipboard’);



let randomFunc ={
	lower:	getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateEL.addEventListener(‘click’, ()function{


});

//generator functions - http://www.net-comber.com/charset.html
//functions to generate random numbers, uppercase, lowercase, and symbols

function getRandomUpper(){
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
	};

  function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	};

  function getRandomNumber(){
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
	  };

function getRandomSymbol() {
	const symbols = ‘!@#$%^&*()<>?:’;
	return symbols [Math.floor(Math.random() * symbols.length)];
}
