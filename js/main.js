(() => {
//variables always go at the top of the file
var words =["party", "javascript", "coffee", "sleepy", "food"];


let currentWord = words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.guess');


wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");


//functions (logic) goes in the middle
function makeGuess() {
  console.log(this.value);
}


//event handling goes at the bottom
guessBox.addEventListener('keyup', makeGuess);

//do these things when start or restarting game
function init() {
  //generate a random number and grab the word that corresponds to it in the word array
  var random = Math.random();


}

  init();
})();
