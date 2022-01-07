/*
#Client-side JS logic goes here
#jQuery is already loaded
#Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(() => {
//responsible for returning a tweet <article>/Dynamic tweet
//Implemented New Tweet Element Function
const createTweetElement = (tweet) => {
const exampleTweet = `<article class="tweet">
  <header>
    <img src= ${escape(tweet.user.avatars)}/>
    <p>${escape(tweet.user.handle)}</p>
    <h4>${escape(tweet.user.name)}</h4>
  </header>
    <p class="content">${escape(tweet.content.text)}</p>
  <footer class="timeago">
  <div>${timeago.format(tweet.created_at)}</div>
  <span>
  <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </span>
  </footer>
</article>`;
  return exampleTweet;
};
      
//Render New Tweets Function, need to prepend to see latest tweets first 
  const renderTweets = (tweets) => {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container    
    $('#tweets-container').empty();
    for (const tweet of tweets) {
    const newTweet = createTweetElement(tweet);
     $('#tweets-container').prepend(newTweet);
    };
  };
    
  $('.fa-angle-double-down').on('click', (event) => { $('#tweet').focus() });

//Tweet Button/Submit Function
  $('.input').on('submit', (event) => {
    event.preventDefault();
    $('.error').hide();
    const tweetText = $('#tweet').val();
    console.log("$('#tweet').val()", $('#tweet').val());
    console.log('tweetText', tweetText);
       
    if (!tweetText) {
      $('.error').html('Tweet is empty!').slideDown('fast');
    } else if (tweetText.length > 140) {
      $('.error').html('Tweet is more than 140 characters').slideDown('fast');
    } else {      
      $.ajax('/tweets', {
      data: `text=${tweetText}`,
      method: 'POST'
      })
    
    .then(() => {
      loadTweets();
      $('#tweet').val('');
      $('.counter').text('140');
      });
    };
  
  });
      
//Load Tweets Function
const loadTweets = () => {
  $.ajax('/tweets', {
    method: 'GET',
    dataType: 'JSON'
  })
  .then(tweets => renderTweets(tweets));
};
      
loadTweets();

//Method:2 helper escape function
const escape = str => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

});