$(function() {
	var rectangle = (element) => {
		document.querySelector(element).style.left = Math.floor(Math.random()*(90-10)+10)+'%';
		document.querySelector(element).style.top = Math.floor(Math.random()*(90-10)+10)+'%';
		document.querySelector(element).style.transform = 'rotate(' + Math.floor(Math.random()*360) + 'deg) translateX(' + Math.floor(Math.random()*(100-0)+0) + '%) translateY(' + Math.floor(Math.random()*(100-0)+0) + '%) scale(' + Math.floor(Math.random()*(15-8)+8)/10 + ')';
	}

  function rectangles() {
    rectangle('.rectangle.f1');
    rectangle('.rectangle.f2');
    rectangle('.rectangle.f3');
    rectangle('.rectangle.f4');
    rectangle('.rectangle.f5');
    rectangle('.rectangle.f6');
    rectangle('.rectangle.f7');
    rectangle('.rectangle.f8');
    rectangle('.rectangle.f9');
    rectangle('.rectangle.f10');
  }

	document.onkeydown = (e) => {
		if(e.keyCode == 82){
			rectangles();
		}
	}

	$('.s1_bg, .shift').click(function() {
		$('div.normalize').removeClass('original')
		rectangles();
	});

	var original = (element) => {
		$('.rectangle').attr('style', '')
	}

  function originals() {
    original('.rectangle.f1');
    original('.rectangle.f2');
    original('.rectangle.f3');
    original('.rectangle.f4');
    original('.rectangle.f5');
    original('.rectangle.f6');
    original('.rectangle.f7');
    original('.rectangle.f8');
    original('.rectangle.f9');
    original('.rectangle.f10');
  }

	$('p.esc').click(function() {
    originals();
	});

	document.onkeyup = (q) => {
		if(q.keyCode == 27){
			originals()
		}
	}

	rectangles()
  setTimeout(rectangles, 1000)
  setTimeout(originals, 2000)

	$(document).on('scroll', function() {
		var el = document.getElementsByClassName('s3')[0]
		var elTop = el.getBoundingClientRect().top
		var documentHeight = document.documentElement.clientHeight
		var s = 0.9 - (documentHeight - elTop) / documentHeight

		console.log('Scroll', elTop, s)

		$('.s1').css('opacity', s)
	})
})
