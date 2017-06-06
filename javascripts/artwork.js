$(function() {
	var settings = {
		angle: 'right'
	}

	init()

	function init() {
		initAngle()
	}

	function initAngle() {
		var angle = $('#artwork').attr('data-angle')

		if (angle) {
			settings.angle = angle
		}
	}

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
		console.log(settings.angle == 'right')

		if (settings.angle == 'right') {
			console.log('YO')
			var random = Math.floor(r * 4) * 90
		} else {
			var random = r * 4 * 90
		}

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
		$('div.normalize, a.save').removeClass('original')

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
			} else {
				queryString = queryString + '&' + v
			}
		})

		window.history.pushState('', document.title, getPathFromUrl(window.location.href) + queryString)
		updateShareUrl()
	}

	function randomizeArtworkFromParams() {
		$('div.normalize, a.save').removeClass('original')

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

		updateShareUrl()
	}

	function normalizeArtwork() {
		$('div.normalize, a.save').addClass('original')

		$('.rectangle').each(function() {
			$(this).attr('style', '')
		})

		window.history.pushState('', document.title, getPathFromUrl(window.location.href))
		updateShareUrl()
	}

	function updateShareUrl() {
		var shareURL = encodeURIComponent(window.location.href)
		$('#share').attr('data-url', window.location.href)
		$('.save').attr('href', $('.save').attr('href') + shareURL)
		initSocialLikes()
	}

	function initSocialLikes() {
		$('.social-likes').socialLikes({
			url: window.location.href
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

  if (window.location.search) {
		randomizeArtworkFromParams()
	}
})
