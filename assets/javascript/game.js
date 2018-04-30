/* <script type="text/javascript"> */



var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
;
var guesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// find an alphabet string that is shorter

var wins= 0;
var losses= 0;
var guessesLeft = 9;
var currentGuesses = []; 


document.onkeyup = function(event) {
    


    var userGuess = event.key //["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (event.key === "Enter") {
        var start = confirm("Are you sure want to start?");
        if (start === false) {
            window.close();
        }
    }



    // if (userGuess === ) { //Im really not sure what to put here.
    // what I want my code to do is only take into account the letters and not everything thats being typed
    // I wanted to see if there was a way to limit the userGuesses but i couldn't google fu intime 
        if (userGuess === computerGuess) {
            wins ++; 
            guessesLeft = 9;
            currentGuesses = [];
            currentGuesses.push(userGuess);
        }else {
            guessesLeft --;
            currentGuesses.push(userGuess);
        }
    
        // console.log(currentGuesses);   
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            currentGuesses = [];
        } 
    // }



    

    // Enter cannot be a guess | enter is currently registering as a userGuess
    // 
     

    var html =

    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "<p>" +
    "<p>Current Guesses: " + currentGuesses + "<p>" ;
    
    document.querySelector("#game").innerHTML = html;


//if the two guesses equal each other user wins?

// How will you count the amount of trys?
}
// pressing the eneter key is how you can start the game
// lossing = when the amount of trys in the game is up 
// variable keeping track of prvious guesses while showing them on the screen  
// alerts --> "You guess correctly" "you lost this time"
// What will be dsplayed and updated while playing and there are wins and losses
// What will be displayed when the user guess and computer guess match 
// What happens when the user runs out of trys
// Resetting the guesses and updating the score when user guesses correct a



// "<p>ties: " + ties + "</p>";
// display the data collected by preivous guesses






