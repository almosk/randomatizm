$(function() {
	var settings = {
		position:  'normal',
		rotate:    'right',
		translate: 'normal',
		scale:     'normal'
	}

	init()

	function init() {
		initPosition()
		initRotate()
		initTranslate()
		initScale()
	}

	function initPosition() {
		var position = $('#artwork').attr('data-position')

		if (position) {
			settings.position = position
		}
	}

	function initRotate() {
		var rotate = $('#artwork').attr('data-rotate')

		if (rotate) {
			settings.rotate = rotate
		}
	}

	function initTranslate() {
		var translate = $('#artwork').attr('data-translate')

		if (translate) {
			settings.translate = translate
		}
	}

	function initScale() {
		var scale = $('#artwork').attr('data-scale')

		if (scale) {
			settings.scale = scale
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
		if (settings.position == 'normal') {
			var random = Math.floor(r * (85 - 0) + 0)
		} else if (settings.position == 'small') {
			var random = Math.floor(r * (30 - 0) + 0)
		} else if (settings.position == 'large') {
			var random = Math.floor(r * (90 - 0) + 0)
		}

		return random + '%'
	}

	function randomRotate(r) {
		if (settings.rotate == 'right') {
			var random = Math.floor(r * 4) * 90
		} else {
			var random = r * 4 * 90
		}

		return 'rotate(' + random + 'deg)'
	}

	function randomTranslate(r, a) {
		if (settings.translate == 'normal') {
			var random = Math.floor(r * (60 - 0) + 0)
		} else if (settings.translate == 'small') {
			var random = Math.floor(r * (30 - 0) + 0)
		} else if (settings.translate == 'large') {
			var random = Math.floor(r * (100 - 0) + 0)
		}

		return 'translate' + a.toUpperCase() + '(' + random + '%)'
	}

	function randomScale(r) {
		if (settings.scale == 'normal') {
			var random = Math.floor(r * (16 - 6) + 6) / 10
		} else if (settings.scale == 'small') {
			var random = Math.floor(r * (12 - 4) + 4) / 10
		} else if (settings.scale == 'large') {
			var random = Math.floor(r * (20 - 8) + 8) / 10
		}

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

			randomizeElement(r1, r2, r3, r4, r5, r6, this)

			var id = $(this).attr('id')
			var queryStringPart = id + '=' + r1 + '+' + r2 + '+' + r3 + '+' + r4 + '+' + r5 + '+' + r6

			randomArtworkData.push(queryStringPart)
		})

		randomArtworkData.map(function(v, i) {
			if (i == 0) {
				queryString = '?' + v
			} else {
				queryString += '&' + v
			}
		})

		window.history.pushState('', document.title, getPathFromUrl(window.location.href) + queryString)
		updateShareUrl()

		ga('send', {
		  hitType: 'event',
		  eventCategory: getPathFromUrl(window.location.href),
		  eventAction: 'randomize',
			eventLabel: window.location.href
		})
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

			randomizeElement(r1, r2, r3, r4, r5, r6, this)
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

		ga('send', {
			hitType: 'event',
			eventCategory: getPathFromUrl(window.location.href),
			eventAction: 'normalize',
			eventLabel: window.location.href
		})
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

	document.onkeydown = function(e) {
		if (e.keyCode == 32) {
			randomizeArtwork()
		}
	}

  if (window.location.search) {
		randomizeArtworkFromParams()
	}

	$(window).on('popstate', function (e) {
    var state = e.originalEvent.state

    if (state !== null) {
			if (window.location.search) {
				randomizeArtworkFromParams()
			}
    }
	})
})
