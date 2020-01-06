//DOM Elements
const resultEL = document.getElementsById(‘result’);
const lengthEL = document.getElementsById(‘length’);
const numbersEL = document.getElementsById(‘numbers’);
const symbolsEL = document.getElementsById(‘symbols’);
const generateEL = document.getElementsById(‘generate’);
const clipboardEL = document.getElementsById(‘clipboard’);



const randomFunc ={
	lower:	getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

generateEL.addEventListener(‘click’,);


function getRandomSymbol() {
	const symbols = ‘!@#$%^&*()<>?:’;
	return symbols [Math.floor(Math.random() * symbols.length)];
}
