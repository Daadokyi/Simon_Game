// adding jQuerry to select the colors randomly
$(document).ready(function() {

    var buttonColours = ["red", "blue", "green", "yellow"];
    var gamePattern = [];

    function nextSequencce() {
        var randomNumber = Math.floor(Math.random() * 4);
    
        // Create a new variable called randomChosenColour
        var randomChosenColour = buttonColours[randomNumber];

        // Adding the randomChosenColor generated to the end of the gamePattern
        gamePattern.push(randomChosenColour);

        // Selecting the button randomly by ID
        var selectedButton = $("#btn" + randomChosenColour);

        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    }

    // Call the function to generate the next sequence
    nextSequencce();

    // Play the corresponding sound
    playSound(randomChosenColour);

     // Function to play the sound based on the button color
     function playSound(color) {
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
    }
});
