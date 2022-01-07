$(document).ready(function() {
  // --- our code goes here ---
//create new variable
$textArea.on('keyup', function() {

//Adeed  new variable  $charCounter to count character in text area
const $charCounter = $(this).siblings('.counter'); 

//added variable to limit cahracter to 140
const remainingCharCount = 140 - $(this).val().length;

});

});