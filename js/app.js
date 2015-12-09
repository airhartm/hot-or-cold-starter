//initialize variables
//new game
//rand
//guess input and validation 1-100
//feedback
//guess list and count


//initialize variables
	var guessEntry
	var guessArray[]
	var guessCounter
	resetVars();

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


	//get form info
	resetVars();
 	$input = $form.find('#userGuess');
 
	//new game
	newGame();

	//submit form
	guessInput($input);

	//evaluate guess
	guessEval();

	//provide feedback
	guessFeedback();

	//update history
	guessHistory();


	function putData(){
		$guessList.html(guessHistory);
		$count.html(guessCounter);
		$feedback.html(guessFeedbackMessage);
	}

	function getData() {
		$formNew = $('a.new');
		$formCount = $('#count');
	}

	function resetVars () {
		guessEntry=0;
		guessHistory=[];
		guessCounter=0;
	}

	function newgame () {
		resetVars();
		getRandomNumber ();
		guessInput();
	}

	function getRandomNumber () {
		return parseInt(math.Random()*100)+1;
		guessFeedbackMessage = "Make your guess!";
	}

	function guessEval () {
		guessInput= $form.find('input[type=submit]');
		//$input.val();
		//focus on input for next guess
		//$input.focus();
		
		//validate input
	}

	function guessFeedback () {



	}

	function guessHistory () {


	}


});


