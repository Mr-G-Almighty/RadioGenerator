const generateButton = document.querySelector('.generate-button');

function passwordGenerate(){
	let textPassword = document.getElementById("text-password").value;
	let numPassword = document.getElementById("number-password").value;
	let textNum = 1;
	let year = new Date().getFullYear();
	let errorDetails = document.getElementById("error-details")
	let errorState = false;
	
	textPassword = textPassword.toLowerCase();
	textPassword = textPassword.replace(/\s/g, '');
	
	if (isNaN(numPassword) == true){
		errorDetails.innerHTML += "Number Error: Not a number<br>";
		errorState = true;
	};
	
	if (numPassword > 999) {
		errorDetails.innerHTML += "Number Error: Number too high<br>";
		errorState = true;
	};
	
	if (numPassword === '') {
		errorDetails.innerHTML += "Number Error: Nothing inserted<br>";
		errorState = true;
	};
	
	if (textPassword === '') {
		errorDetails.innerHTML += "Text Error: Nothing inserted<br>";
		errorState = true;
	};
	
	let splitText = textPassword.split('');
	splitText.forEach(function(item){
		if (isNaN(item) == false) {
			errorDetails.innerHTML += "Text Error: Numbers Detected<br>";
			errorState = true;
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
				errorDetails.innerHTML += "Text Error: Symbols Detected <br>";
				errorState = true;
				return;
		}
		
	});
	
	
	let parsedNumber = ((textNum * numPassword) * year);
	parsedNumber = parsedNumber.toString();
	let parsedArray = parsedNumber.split('');
	
	if (parsedArray[1] === ".") {parsedArray.splice(1, 1)}
	
	let outputContainer = document.getElementById("generated-frequency");
	
	if (errorState === true){
		outputContainer.textContent = "ERR"
		return;
	}
	
	errorDetails.innerHTML = "";
	
	outputContainer.textContent = parsedArray[0] + parsedArray[1] + parsedArray[2] + "." + parsedArray[3];
	
};

generateButton.addEventListener("click", passwordGenerate);