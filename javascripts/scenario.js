$(function(){
  function teletype() {
    $('.topText').teletype({})
  }

  function comment() {
    $('div.comments').toggleClass('none');
  }

  $('.topText').fadeIn(10);

  $('.bg').fadeIn(1000);


  setTimeout(teletype, 2500)

  $('.bottomText').delay(3500);
  $('.bottomText').fadeIn(1000);

  setTimeout(comment, 3500)

  $('.arrow').delay(3700);
  $('.arrow').fadeIn(500);
});
