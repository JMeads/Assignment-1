/**
 * Your header documentation here for _listen
 *    For your reference...
 * 		event will hold an Event object with the pixels in
 *   	event.detail.data and the timestamp in event.timeStamp
 */

let codeRef = document.getElementById("rx-code");
let translateRef = document.getElementById("rx-translated");
let decoder = [
	[],
	["", "e", "t", "a", "n", "d"],
	["", "o", "i", "r", "u", "c"],
	["", "s", "h", "m", "f", "p"],
	["", "l", "y", "g", "v", "j"],
	["", "w", "b", "x", "q", "z"]
];

_listen = function(event) {
	let input = new Array();
	input = event.detail.data;
	let grayscale = [];
	for (let i = 0; i < input.length - 1; i += 4) {
		let averageValue = Math.round((input[i] + input[i + 1] + input[i + 2]) / 3);
		grayscale.push(averageValue);
	}
	// Take average of grayscale to determine black or White
	// Putting Black or white into array with black being 0 and white being 1
	let blackWhite = [];
	let averageGrayscale;
	let sumGrayscale = 0;
	for (let j = 0; j < grayscale.length - 1; j++) {
		sumGrayscale = sumGrayscale + grayscale[j];
	}
	averageGrayscale = sumGrayscale / grayscale.length;
	if (averageGrayscale < 30) {
		blackWhite.push(0);
	} else if (averageGrayscale > 220) {
		blackWhite.push(1);
	} else {
	}
};

// Define a unit of time for "1" flash
// If 3 black then full gap otherwise half gap

// your code here
// Step 1: Convert Tap code to text -- DONE
// Step 2: Convert to grayscale -- DONE
// Step 3: White/Black Duration -- DONE
// Step 4: Comparing full and half gap
// Step 6: Handle early termination message

/**
 * Your header documentation here for clear
 */
clear = function() {
	// your code here
	// Clear the black and white array
	// Clear text in windows
};

/**
 * Your header documentation here for translate
 */
translate = function() {
	// your code here
	// Step 5: Conversion to characters
	// let codeString;
	// Step 7: Convert special characters -- DONE
	// Change whatever the string variable is with codeString
	// Converting "wuw" to " "
	// let translate1 = codeString.replace(/wuw/gi, " ");
	// Converting "qc" to "k"
	// let translate2 = codeString.replace(/qc/gi, "k");
	// return translate2;
};
