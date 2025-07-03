// Initialize variables with let instead of var for block scoping
let guessEntry;
let guessArray = []; // Initialize this variable as an empty array
let guessRand;
let guessCounter = 1;
let guessFeedbackMessage;
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  $(".what").click(() => {
    $(".overlay").fadeIn(1000); // Use arrow functions for concise syntax
  	});

  	/*--- Hide information modal box ---*/
  $("a.close").click(() => {
    $(".overlay").fadeOut(1000); // Use arrow functions
  	});

  	/*--- Reset game ---*/
  $(".new").click(() => {
  		newGame();
  	});

  // Start a new game on page load
	newGame();

  // Use form submission event instead of button click for better form handling
	$('#guessButton').click(function(e) {
		e.preventDefault();
    guessEntry = $('#userGuess').val();
		guessEval();
		})
});

// Function to start a new game
function newGame() {
		resetVars();
  guessRand = getRandomNumber();
		entry();
		$('#feedback').html(guessFeedbackMessage);
	}

// Log the random number for debugging (remove in production)
function entry() {
  console.log(`random number is ${guessRand}`); // Use template literals
		buttonNewGame = $('a.new');
	}

// Update displayed data
function putData() {
		$('#guessList').html(guessList);
		$('#count').html(guessCounter);
		$('#feedback').html(guessFeedbackMessage);
	}

// Reset game variables
function resetVars() {
  guessEntry = 0;
  guessArray = []; // Ensure this is set as an empty array
  guessCounter = 1;
		document.getElementById("guessButton").style.visibility = "visible";
  guessList = '';
		putData();
  guessFeedbackMessage = "Make a guess!"
	}

// Generate a random number between 1 and 100
function getRandomNumber() {
		guessFeedbackMessage = "Make a guess";
  return parseInt(Math.random() * 100, 10) + 1; // Include radix in parseInt
	}

// Evaluate the user's guess
function guessEval() {
  console.log(`entry was ${guessEntry}`); // Use template literals
		if ((guessEntry < 1) || (guessEntry > 100)) {
    guessFeedbackMessage = "Try again. Choose a number between 1 and 100."
		}		
  else if (guessEntry != parseInt(guessEntry, 10)) { // Ensure parseInt uses radix
    guessFeedbackMessage = "Try again. Your choice must be an integer."
		}
		else {
			guessArray.push(guessEntry);
			guessHistory();
			guessFeedback();
			guessCounter++;
			putData();
		}
  // Use aria-live for feedback for screen readers
  $('#feedback').attr('aria-live', 'polite').html(guessFeedbackMessage);
	}

// Provide feedback based on the guess
function guessFeedback() {
  let guessDifference = Math.abs(guessEntry - guessRand); // Use let for block scoping
		if (guessDifference > 50) {
    guessFeedbackMessage = "You're freezing!";
		}
		else if (guessDifference > 40) {
    guessFeedbackMessage = "Cold";
		}
		else if (guessDifference > 30) {
    guessFeedbackMessage = "Cool";
		}
		else if (guessDifference > 20) {
    guessFeedbackMessage = "Warm";
		}
		else if (guessDifference > 10) {
    guessFeedbackMessage = "Hot";
		}
		else if (guessDifference > 0) {
    guessFeedbackMessage = "You're on fire!";
		}
		else {
    guessFeedbackMessage = "You're a winner!";
			document.getElementById("guessButton").style.visibility = "hidden";
			$('#userGuess').val('');
			guessCounter--;
	}
}

// Log the user's guess history
function guessHistory() {
  let guessList = ''; // Use let instead of redeclaring the global one
  for (let i = 1; i <= guessCounter; i++) { // Use let in the for loop
    guessList = `${guessList}<li>${guessArray[i - 1]}</li>`; // Use template literals
		}
		$('#guessList').html(guessList);
	}
