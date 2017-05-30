$(function(){
  $.fn.teletype = function(opts){
      var $this = this,
          defaults = {
              animDelay: 100,
              text: "RANDOMATIZM"
          },
          settings = $.extend(defaults, opts);

      $.each(settings.text.split(''), function(i, letter){
          setTimeout(function(){
              $this.html($this.html() + letter);
          }, settings.animDelay * i);
      });
  };
});
