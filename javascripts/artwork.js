$(function() {
	var rectangle = (element) => {
		document.querySelector(element).style.left = Math.floor(Math.random()*(90-10)+10)+'%';
		document.querySelector(element).style.top = Math.floor(Math.random()*(90-10)+10)+'%';
		document.querySelector(element).style.transform = 'rotate(' + Math.floor(Math.random()*4)*90 + 'deg) translateX(' + Math.floor(Math.random()*(100-0)+0) + '%) translateY(' + Math.floor(Math.random()*(100-0)+0) + '%) scale(' + Math.floor(Math.random()*(15-8)+8)/10 + ')';
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
		rectangle('.rectangle.f11');
		rectangle('.rectangle.f12');
		rectangle('.rectangle.f13');
		rectangle('.rectangle.f14');
		rectangle('.rectangle.f15');
		rectangle('.rectangle.f16');
		rectangle('.rectangle.f17');
		rectangle('.rectangle.f18');
		rectangle('.rectangle.f19');
		rectangle('.rectangle.f20');
		rectangle('.rectangle.f21');
		rectangle('.rectangle.f22');

	}

	$('.figures, .random').click(function() {
		$('div.tooriginal').removeClass('original')
		rectangles();
	});

	document.onkeyup = (e) => {
		if(e.keyCode == 32){
			$('div.tooriginal').removeClass('original')
			rectangles();
		}
	}

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
		original('.rectangle.f11');
		original('.rectangle.f12');
		original('.rectangle.f13');
		original('.rectangle.f14');
		original('.rectangle.f15');
		original('.rectangle.f16');
		original('.rectangle.f17');
		original('.rectangle.f18');
		original('.rectangle.f19');
		original('.rectangle.f20');
		original('.rectangle.f21');
		original('.rectangle.f22');
	}

	$('.tooriginal').click(function() {
		$('div.tooriginal').addClass('original')
		originals();
	});
});
