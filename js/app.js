//initialize variables
//new game
//rand
//guess input and validation 1-100
//feedback
//guess list and count


//initialize variables
var guessEntry;
var guessArray;
var guessRand;
var guessCounter;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	//new game
	newGame();

});

	function newgame () {
		resetVars();
		guessRand=getRandomNumber ();
		buttonNewGame = $('a.new');
		guessEntry= $('userGuess').val();
	}

	function putData(){
		$('#guessList').html(guessHistory);
		$('#count').html(guessCounter);
		$('#feedback').html(guessFeedbackMessage);
	}

	function resetVars () {
		guessEntry=0;
		guessHistory=[];
		guessCounter=0;
	}

	function getRandomNumber () {
		guessFeedbackMessage = "Make your guess!";
		return parseInt(math.Random()*100)+1;
	}

	//validate input
	function guessEval () {
		if (guessEntry < 1 or guessEntry > 100) {
			guessFeedbackMessage="Try again. Choose a number between 1 and 100."
		}		
		else if (guessEntry <>parseInt(guessEntry)) {
			guessFeedbackMessage="Try again. Your choice must be an integer."
		}
		else 
			guessArray.push(guessEntry)
			guessHistory()
			guessFeedback()
	}

	function guessFeedback () {
		guessDifference=math.abs(guessEntry-guessRand)
		switch (guessDifference) {
			case (guessDifference > 50):
				guessFeedbackMessage="You're freezing!";
				break;
			case (guessDifference > 40):
				guessFeedbackMessage="Cold";
				break;
			case (guessDifference > 30):
				guessFeedbackMessage="Cool";
				break;
			case (guessDifference > 20):
				guessFeedbackMessage="Warm";
				break;
			case (guessDifference > 10):
				guessFeedbackMessage="Hot";
				break;
			case (guessDifference <= 10):
				guessFeedbackMessage="You're on fire!";
				break;
		}
		guessCounter++;
		guessHistory();
		putData();
	}

	function guessHistory () {


	}


