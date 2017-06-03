$(function(){
  function teletype() {
    $('.topText').teletype({})
  }

  function comment() {
    $('div.comments').toggleClass('none');
    $('section.menubar').toggleClass('none');
  }

  function bgOpacity() {
    $('div.s1_bg').addClass('bgOpacity');
  }

  $('.topText').fadeIn(10);

  $('.s1_bg').fadeIn(1000);

  setTimeout(bgOpacity, 2400)

  setTimeout(teletype, 2500)

  $('.bottomText').delay(3500);
  $('.bottomText').fadeIn(1000);

  setTimeout(comment, 3500)

  $('.arrow').delay(3700);
  $('.arrow').fadeIn(500);
});
