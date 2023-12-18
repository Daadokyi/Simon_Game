// adding jQuerry to select the colors randomly
var userClickedPattern = [];

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
    function playSound(){};
    playSound(randomChosenColour);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    $('.btn').click(function() {
        // Get the ID of the clicked button
        var buttonId = $(this).attr('id');
        playSounds(randomChosenColour);
        animatePress(randomChosenColour);
        checkAwnser(userClickedPattern.length - 1);
        
        // Trigger a handler function (replace this with your custom logic)
        buttonClickHandler(buttonId);
    });
    
    
    
    // Handler function for button click (replace this with your custom logic)
    function buttonClickHandler(buttonId) {
        console.log('Button clicked:', buttonId);
        
    }   

    
    
});
