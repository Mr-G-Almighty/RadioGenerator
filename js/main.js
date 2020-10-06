const generateButton = document.querySelector('.generate-button');

function passwordGenerate(){
	let textPassword = document.getElementById("text-password").value;
	let numPassword = document.getElementById("number-password").value;
	let textNum = 1;
	let year = new Date().getFullYear();
	
	textPassword = textPassword.toLowerCase();
	textPassword = textPassword.replace(/\s/g, '');
	
	if (isNaN(numPassword) == true){
		console.log("Number Error: Not a number");
		return;
	};
	
	if (numPassword > 999) {
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
		if (isNaN(item) == false) {
			return;
		}
		switch (item) {
			case "a":
				textNum = textNum * 21;
				break;
			case "b":
				textNum = textNum * 35;
				break;
			case "c":
				textNum = textNum * 33;
				break;
			case "d":
				textNum = textNum * 23;
				break;
			case "e":
				textNum = textNum * 13;
				break;
			case "f":
				textNum = textNum * 24;
				break;
			case "g":
				textNum = textNum * 25;
				break;
			case "h":
				textNum = textNum * 26;
				break;
			case "i":
				textNum = textNum * 18;
				break;
			case "j":
				textNum = textNum * 27;
				break;
			case "k":
				textNum = textNum * 28;
				break;
			case "l":
				textNum = textNum * 29;
				break;
			case "m":
				textNum = textNum * 37;
				break;
			case "n":
				textNum = textNum * 36;
				break;
			case "o":
				textNum = textNum * 19;
				break;
			case "p":
				textNum = textNum * 10;
				break;
			case "q":
				textNum = textNum * 11;
				break;
			case "r":
				textNum = textNum * 14;
				break;
			case "s":
				textNum = textNum * 22;
				break;
			case "t":
				textNum = textNum * 15;
				break;
			case "u":
				textNum = textNum * 17;
				break;
			case "v":
				textNum = textNum * 34;
				break;
			case "w":
				textNum = textNum * 12;
				break;
			case "x":
				textNum = textNum * 32;
				break;
			case "y":
				textNum = textNum * 16;
				break;
			case "z":
				textNum = textNum * 31;
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
	
	if (parsedArray[1] === ".") {parsedArray.splice(1, 1)}
	
	let outputContainer = document.getElementById("generated-frequency");
	outputContainer.textContent = parsedArray[0] + parsedArray[1] + parsedArray[2] + "." + parsedArray[3];
};

generateButton.addEventListener("click", passwordGenerate);