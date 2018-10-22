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

	// schedule()
	// setInterval( schedule, 60000)
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

function schedule() {
	console.log('updating radio text')
	let schedule = [
		['10/19/18', 'person 0'],
		['10/20/18', 'person 1'],
		['10/21/18', 'person 2'],
		['10/22/18', 'person 3'],
		['10/23/18', 'person 4'],
		['10/24/18', 'person 5'],
		['10/24/18', 'person 6']
	]

	let lastbroadcast = null
	let nextbroadcast

	for (var i = 0; i < schedule.length; i++) {
		let eventdate = new Date(schedule[i][0]).getTime() / 1000
		let today = new Date().getTime() / 1000
		// console.log(eventdate + '\n' + today)

		if ( eventdate > lastbroadcast || lastbroadcast == null ) {
			lastbroadcast = eventdate

			if ( eventdate <= today ) {
				nextbroadcast = eventdate
				if ( eventdate <= nextbroadcast ) {
					nextbroadcast = schedule[i]
				}
			}
		}
	}

	let title = $('#broadcast-title')
	title.text(nextbroadcast[1])

















}