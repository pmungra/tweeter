$(document).ready(function() {
  // --- our code goes here ---
//create new variable
$textArea.on('keyup', function() {

//Adeed  new variable  $charCounter to count character in text area
const $charCounter = $(this).siblings('.counter'); 

//added variable to limit cahracter to 140
const remainingCharCount = 140 - $(this).val().length;

//turns char counter to red if goes above 140 cahracter 
//https://dev.to/websolutionstuff/character-count-in-textarea-48p3 
$charCounter.text(remainingCharCount);
  if (remainingCharCount < 0) {
    $charCounter.addClass('over-char-limit');
    // Adds the class to each element in the set of matched elements.
  } else {
    $charCounter.removeClass('over-char-limit');
  }  
});
});