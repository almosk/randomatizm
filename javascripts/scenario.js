$(function(){
  $('.topText').fadeIn(10);
  $('.topText').teletype({});

  $('.bottomText').delay(2000);
  $('.bottomText').fadeIn(1000);

  $('.arrow').delay(3500);
  $('.arrow').fadeIn(500);

  $('body').delay(3500);
  $('body').toggleClass('long');
});
