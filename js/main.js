$(document).ready( function() {
	$('.nav-item').click( function() {
		let content = $(this).attr('content')
		content = '#' + content
		let navItem = $(this)
		showContent(content, navItem)
	})

	let radio = $('audio')[0]

	$('#play').click(function() { play(radio) })
	$('#pause').click(function() { pause(radio) })
})

function showContent(content, navItem) {
	console.log(content)
	$('#content').children().removeClass('show');
	$('.nav-item').removeClass('selected')

	$(content).addClass('show')
	$(navItem).addClass('selected')
}

function play(radio) {
	radio.play()

	$('#play').removeClass('show')
	$('#pause').addClass('show')
}

function pause(radio) {
	radio.pause()

	$('#pause').removeClass('show')
	$('#play').addClass('show')
}