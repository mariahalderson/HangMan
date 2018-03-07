(() => {
//variables always go at the top of the file
var words =["party", "javascript", "coffee", "sleepy", "food"];


let currentWord = words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.guess'),
    wrongGuesses = 0,
    correctGuesses= 0,
    resetScreen = document.querySelector('.lose'),
    resetButton = resetScreen.querySelector('button'),
    wrongLetters = document.querySelector('.wrong-letters'),
    wrongLetterArray = [];

    console.log("Welcome to Hang Man! Your Current word is: ", currentWord);

//do these things when start or restarting game
function init() {
  //generate a random number and grab the word that corresponds to it in the word array
wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

}

function showResetScreen(message) {
	resetScreen.classList.add('show-piece');

  //grab header tag and change its content-replace with message
  resetScreen.querySelector('h3').textContent = message;
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

  let currentGuess = this.value;
  //set up path through app.
  //inside round brackets, check for condition
  if (currentWord.indexOf(this.value) < 0 ){ //if letter is at no position (not in word) , will appear as -1. LOSING PATH/bpth branches
  	//person chose wrong letter, track wrong answer.
    
  	console.log("Wrong guess!! Your wrong guess count: ", wrongGuesses+1);
  	if(wrongGuesses >=6) {
  		console.log('you lose!');
  		//show losing screen
  		showResetScreen("Game over!");
  	}else{
  		//push wrong letter into array
  	wrongLetterArray.push(this.value);
  	wrongLetters.textContent = wrongLetterArray.join(" ");
  	document.querySelector(`.wrongGuess${wrongGuesses}`).classList.add('show-piece');


  	//incriment wrong guess count, show a piece of hangman.
  	wrongGuesses++;//last thing in funct

  }

}else{ //this else matches the if on line??
	//let letterGuess = currentWord.split("");
	//console.log(letterGuess.includes(this.value));
	//if(this.value == true){
	//	wrongLetter.textContent = this.value;
		//probably change this!!!
    
    var matchAgainst = currentWord.split('');
    var hintString = wordHint.textContent.split(" ");// split on the characters, not the underscores

        //loop through the curent word and checl each letter
        matchAgainst.forEach((letter, index) => {

          if(letter === currentGuess){
            hintString[index] = currentGuess;
            correctGuesses++;
          }
        
        });

        wordHint.textContent = "";
        wordHint.textContent = hintString.join(" ");

        if (correctGuesses == currentWord.length){
          showResetScreen("You win!");
        }
    

	}
}


//event handling goes at the bottom
guessBox.addEventListener('keyup', makeGuess);
resetButton.addEventListener('click', resetGame);


  init();

})();
