const generateButton = document.querySelector('.generate-button');

function passwordGenerate(){
	let textPassword = document.getElementById("text-password").value;
	let numPassword = document.getElementById("number-password").value;
	let textNum;
	let year = new Date().getFullYear();
	
	textPassword = textPassword.toLowerCase();
	textPassword = textPassword.replace(/\s/g, '');
	
	console.log("|" + textPassword + "|")
	
	console.log(textPassword + numPassword);
	
	if (isNaN(numPassword) == true){
		console.log("Number Error: Not a number");
		return;
	};
	
	if (numPassword > 99) {
		console.log("Number Error: Number too high");
		return;
	};
	
	if (numPassword === '') {
		console.log("Number Error: Nothing inserted");
		return;
	};
	
	if (textPassword === '') {
		console.log("Text Error: Nothing inserted");
		return;
	};
	
	let splitText = textPassword.split('');
	splitText.forEach(function(item){
		switch (item) {
			case "a":
				textNum = 21;
				break;
			case "b":
				textNum = 35;
				break;
			case "c":
				textNum = 33;
				break;
			case "d":
				textNum = 23;
				break;
			case "e":
				textNum = 13;
				break;
			case "f":
				textNum = 24;
				break;
			case "g":
				textNum = 25;
				break;
			case "h":
				textNum = 26;
				break;
			case "i":
				textNum = 18;
				break;
			case "j":
				textNum = 27;
				break;
			case "k":
				textNum = 28;
				break;
			case "l":
				textNum = 29;
				break;
			case "m":
				textNum = 37;
				break;
			case "n":
				textNum = 36;
				break;
			case "o":
				textNum = 19;
				break;
			case "p":
				textNum = 10;
				break;
			case "q":
				textNum = 11;
				break;
			case "r":
				textNum = 14;
				break;
			case "s":
				textNum = 22;
				break;
			case "t":
				textNum = 15;
				break;
			case "u":
				textNum = 17;
				break;
			case "v":
				textNum = 34;
				break;
			case "w":
				textNum = 12;
				break;
			case "x":
				textNum = 32;
				break;
			case "y":
				textNum = 16;
				break;
			case "z":
				textNum = 31;
				break;
			default:
				console.log("Text Error: Symbols detected");
				return;
				break;
		}
	});
	let parsedNumber = ((textNum * numPassword) * year);
	parsedNumber = parsedNumber.toString();
	let parsedArray = parsedNumber.split('');
	
	let outputContainer = document.getElementById("generated-frequency");
	outputContainer.textContent = parsedArray[0] + parsedArray[1] + parsedArray[2] + "." + parsedArray[0];
};

generateButton.addEventListener("click", passwordGenerate);