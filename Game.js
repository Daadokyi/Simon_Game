// adding jQuerry to select the colors randomly
$(document).ready(function() {
    var gamePattern = [];
    var buttonColours = ["red", "blue", "green", "yellow"];

    function nextSequencce() {
        var randomNumber = Math.floor(Math.random() * 4);
        console.log("Random Number: " + randomNumber);

        // Create a new variable called randomChosenColour
        var randomChosenColour = buttonColours[randomNumber];

        // Adding the randomChosenColor generated to the end of the gamePattern
        gamePattern.push(randomChosenColour);

        // Selecting the button randomly by ID
        var selectedButton = $("#" + randomChosenColour);

        // Animate a flash effect on the selected button
        selectedButton.animate({
            opacity: 0.2
        }, 200, function() {
            // Animation complete, restore original opacity
            selectedButton.animate({
                opacity: 1
            }, 200);
        });
    }

    // Call the function to generate the next sequence
    nextSequencce();
});
