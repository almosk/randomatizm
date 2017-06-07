$(function(){
  function teletype() {
    $('.topText').teletype({})
  }

  function comment() {
    $('div.comments').toggleClass('none');
    $('div.comments_mobile').toggleClass('none');
    // $('section.menubar').toggleClass('none');
  }

  function bgOpacity() {
    $('div.s1_bg').addClass('bgOpacity');
  }

  function bottomText() {
    $('.bottomText').toggleClass('opacityZero');
  }

  $('.topText').fadeIn(10);
  $('.s1_bg').fadeIn(1000);

  setTimeout(bgOpacity, 2400)
  setTimeout(teletype, 2500)
  setTimeout(bottomText, 3500)
  setTimeout(comment, 3500)

  $('.arrow').delay(3700);
  $('.arrow').fadeIn(500);
});
