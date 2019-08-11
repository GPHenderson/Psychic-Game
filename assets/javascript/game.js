var computerChoice =['a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Variables for wins, losses, and gueses left
var wins= 0;
var losses = 0;
var guesses = 10; 
var guessesSofar= [];


var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("guessesSoFar-text");
var guessesText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesSoFarText = document.getElementById("guessesSoFar-text");



document.onkeyup = function (event) {
    var userGuess=event.key;

    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    if (userGuess === computerChoice){
        wins++;  
        guessesLeftText= 10;
        guessesSoFarText= [];
    } 
    if (userGuess !== computerChoice)
    {guessesLeftText--;}

    if (guessesLeftText==0) {
      lossesText++;
      guessesSoFarText = [];
      guessesLeftText= 10;
    }

   if (guessesLeftText.indexOf (userGuess)>=0) {

   }
   else{guessesSoFarText.push (guessesSoFarText)
    userChoiceText.textContent = "Your Guesses so far: ";

        directionsText.textContent = "";

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        gussesLeftText.textContent= "Guess Left: ";
}
};