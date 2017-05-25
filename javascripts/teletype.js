$.fn.teletype = function(opts){
    var $this = this,
        defaults = {
            animDelay: 50
        },
        settings = $.extend(defaults, opts);

    $.each(settings.text.split(''), function(i, letter){
        setTimeout(function(){
            $this.html($this.html() + letter);
        }, settings.animDelay * i);
    });
};

$(function(){
    $('.topText').teletype({
        animDelay: 200,
        text: "RANDOMATIZM"
    });
});
