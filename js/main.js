(() => {
//variables always go at the top of the file
var words =["party", "javascript", "coffee", "sleepy", "food"];


let currentWord = words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.guess'),
    wrongGuesses = 0,
    resetScreen = document.querySelector('.lose'),
    resetButton = resetScreen.querySelector('button'),
    wrongLetters = document.querySelector('.wrong-letters'),
    wrongLetterArray = [];

//do these things when start or restarting game
function init() {
  //generate a random number and grab the word that corresponds to it in the word array
wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

}

function showResetScreen() {
	resetScreen.classList.add('show-piece');
}

function resetGame(){
	wrongGuesses = 0;
	let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
	gamePieces.forEach(piece => piece.classList.remove('show-piece'));
	wrongLetterArray = [];
	wrongLetters.textContent = wrongLetterArray;

	init();
}


//functions (logic) goes in the middle
function makeGuess() {
  console.log(this.value);

  if (this.value == "" || this.value.length < 1) {
  	return;
  }

  //set up path through app.
  //inside round brackets, check for condition
  if (currentWord.indexOf(this.value) < 0 ){ //if letter is at no position (not in word) , will appear as -1.
  	//person chose wrong letter, track wrong answer.
  	
  	if(wrongGuesses >=6) {
  		console.log('you lose!');
  		//show losing screen
  		showResetScreen();
  	}else{
  		//push wrong letter into array
  	wrongLetterArray.push(this.value);
  	wrongLetters.textContent = wrongLetterArray.join(" ");
  	document.querySelector(`.wrongGuess${wrongGuesses}`).classList.add('show-piece');

  	//incriment wrong guess count, show a piece of hangman.
  	wrongGuesses++;//last thing in funct
  }

}else{
	let letterGuess = currentWord.split("");
	console.log(letterGuess.includes(this.value));
	if(this.value == true){
		wrongLetter.textContent = this.value;
		//probably change this!!!
	}
}
}




//event handling goes at the bottom
guessBox.addEventListener('keyup', makeGuess);
resetButton.addEventListener('click', resetGame);



  init();
})();
