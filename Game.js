// adding jQuerry to select the colors randomly
$(document).ready(function() {

var gamePattern = [];
// creating an array to store the colours of the various buttons
    var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequencce(){
    var randomNumber =  Math.floor(Math.random()*4);
        console.log("Random Number: " + randomNumber);
// Return the generated random number (if needed)
    return randomNumber;
} 
    // Create a new variable called randomChosenColour
var randomChosenColour = buttonColours[randomNumber];

// adding the randomChosenColor generated to the end of the gamePattern
gamePattern.push(randomChosenColour);

// selecting the buttoms randomly 
var selectedButtons = $('.colorButton.' + randomColor);

}
