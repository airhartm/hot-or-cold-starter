//initialize variables
//new game
//rand
//guess input and validation 1-100
//feedback
//guess list and count


//initialize variables
var guessRand
var guessEntry=0
var guessArray[]
var guessCount=0
var guessTemp 

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	//get dom objects
	$selectNew = $('a.new');
	$form = $('form');
	$counter = $('#count');
	$guesses = $('#guessList');

	function newgame () {
		guessRand=parseInt(math.Random()*100)
		guessTemp = "Make your guess!"

	}


















});


