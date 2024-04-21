// Get the input field
var inputFieldFingers = document.getElementById('inputfield');
const typingIntervalCharacter = 4000; // Change the delay here (in milliseconds)
const typingIntervalWord = 400;
const pauseSpace = 100;
var methodUsed = "character"; // or "word"


//window.addEventListener("load", function() {

    // Function to trigger space bar event
    function triggerSpaceBar() {
           // i don't know why this doesn't count as event
        // const event = new KeyboardEvent('keydown', {
        // key: ' ',
        // keyCode: 32,
        // which: 32,
        // code: 'Space'
        // });
        // inputFieldFingers.dispatchEvent(event); // make space after the word
        // inputFieldFingers.value += ' ';

        // Create a new KeyboardEvent to simulate a space key press


        console.log('triggered space');
        
    }

    // Function to type a word into the input field
    function typeWord(word) {

        if(methodUsed==="character"){
            for (var i = 0; i < word.length; i++) {
                inputFieldFingers.value += word[i]; // Add the next character to the input field
                setTimeout(console.log, typingIntervalCharacter, `char: ${word[i]}`);
            }
        }else{
            inputFieldFingers.value+=word;
        }

        //setTimeout(triggerSpaceBar(), pauseSpace);

    }


    // Function to continuously check for changes in the highlighted word
    function checkForHighlightedWord() {
        // Get the `.highlight` 
        var highlightedElement = document.querySelector(".highlight");

        // Get the next sibling element
        highlightedElement = highlightedElement.nextElementSibling;

        // Check if the next sibling exists
        if (highlightedElement !== null) {
            
            console.log("Next span element:", highlightedElement);
        } else {
            // If there is no next sibling, handle accordingly
            console.log("There is no next sibling span element.");
            return;
        }

        // Get the word that should be typed
        var highlightedWord = highlightedElement ? highlightedElement.textContent : null;
        
        // Check if the word exists
        if (highlightedWord) {
            typeWord(highlightedWord);
            
        } else {
            console.log("Word not found. Typing stopped.");
        }

        // Repeat the check after a delay
        //setTimeout(checkForHighlightedWord, typingIntervalWord); // Adjust the delay here (in milliseconds)
        
    }

    inputFieldFingers.addEventListener('input', function(event) {
        // This function will be called whenever the input value changes
        // You can access the input value using event.target.value
        checkForHighlightedWord();
    });
    
  
//});