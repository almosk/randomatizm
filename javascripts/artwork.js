$(function() {
	function getPathFromUrl(url) {
		return url.split('?')[0]
	}

	function getURLParameter(name) {
	  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
	}

	function random() {
		return Math.random()
	}

	function randomPosition(r) {
		var random = Math.floor(r * (90 - 10) + 10)
		return random + '%'
	}

	function randomRotate(r) {
		var random = Math.floor(r * 4) * 90
		return 'rotate(' + random + 'deg)'
	}

	function randomTranslate(r, a) {
		var random = Math.floor(r * (100 - 0) + 0)
		return 'translate' + a.toUpperCase() + '(' + random + '%)'
	}

	function randomScale(r) {
		var random = Math.floor(r * (15 - 8) + 8) / 10
		return 'scale(' + random + ')'
	}

	function randomTransform(r3, r4, r5, r6) {
		return randomRotate(r3) + randomTranslate(r4, 'X') + randomTranslate(r5, 'Y') + randomScale(r6)
	}

	function randomizeElement(r1, r2, r3, r4, r5, r6, element) {
		var styles = {
			left:      randomPosition(r1),
			top:       randomPosition(r2),
			transform: randomTransform(r3, r4, r5, r6)
		}

		$(element).css(styles)

		return styles
	}

	function randomizeArtwork() {
		$('div.normalize').removeClass('original')

		var randomArtworkData = []
		var queryString = ''

		$('.rectangle').each(function() {
			var r1 = random()
			var r2 = random()
			var r3 = random()
			var r4 = random()
			var r5 = random()
			var r6 = random()
			var randomizeData = randomizeElement(r1, r2, r3, r4, r5, r6, this)
			var id = $(this).attr('id')
			var queryStringPart = id + '=' + r1 + '+' + r2 + '+' + r3 + '+' + r4 + '+' + r5 + '+' + r6

			randomArtworkData.push(queryStringPart)
		})

		randomArtworkData.map(function(v, i) {
			if (i == 0) {
				queryString = '?' + v
			// } else if (i == randomArtworkData.length - 1) {
				// nothing
			} else {
				queryString = queryString + '&' + v
			}
		})

		console.log(queryString)
		// window.location.href = getPathFromUrl(window.location.href) + queryString
		// window.history.pushState("", document.title, "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0] + queryString)
		// console.log("/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0])
		window.history.pushState("", document.title, getPathFromUrl(window.location.href) + queryString)
	}

	function randomizeArtworkFromParams() {
		$('.rectangle').each(function() {
			var params = getURLParameter($(this).attr('id')).split(' ')

			var r1 = params[1-1]
			var r2 = params[2-1]
			var r3 = params[3-1]
			var r4 = params[4-1]
			var r5 = params[5-1]
			var r6 = params[6-1]
			var randomizeData = randomizeElement(r1, r2, r3, r4, r5, r6, this)
		})

		// $('#share').attr('data-url', window.location.href)
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

	randomizeArtworkFromParams()
})
