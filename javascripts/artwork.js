$(function() {
	function randomPosition() {
		var random = Math.floor(Math.random() * (90 - 10) + 10)
		return random + '%'
	}

	function randomRotate() {
		var random = Math.floor(Math.random() * 4) * 90
		return 'rotate(' + random + 'deg)'
	}

	function randomTranslate(a) {
		var random = Math.floor(Math.random() * (100 - 0) + 0)
		return 'translate' + a.toUpperCase() + '(' + random + '%)'
	}

	function randomScale() {
		var random = Math.floor(Math.random() * (15 - 8) + 8) / 10
		return 'scale(' + random + ')'
	}

	function randomTransform() {
		return randomRotate() + randomTranslate('X') + randomTranslate('Y') + randomScale()
	}

	function randomizeElement(element) {
		var styles = {
			left:      randomPosition(),
			top:       randomPosition(),
			transform: randomTransform()
		}

		$(element).css(styles)
	}

	function randomizeArtwork() {
		$('div.normalize').removeClass('original')

		$('.rectangle').each(function() {
			randomizeElement(this)
		})
	}

	function normalizeArtwork() {
		$('div.normalize').addClass('original')

		$('.rectangle').each(function() {
			$(this).attr('style', '')
		})
	}

	$('.figures, .random').click(function() {
		randomizeArtwork()
	})

	$('.normalize').click(function() {
		normalizeArtwork()
	})

	document.onkeyup = function(e) {
		if (e.keyCode == 32) {
			randomizeArtwork()
		}
	}
})
