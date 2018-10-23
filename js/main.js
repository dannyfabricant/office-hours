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

	schedule()
	setInterval( schedule, 60000)
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
		['10/26/18', 14, 'FOOD'],
		['10/26/18', 18, 'Angela Dimayuga'],
		['10/29/18', 14, 'Karen Wong'],
		['10/29/18', 18, 'MN'],
		['10/30/18', 14, 'PlayLab'],
		['10/30/18', 18, 'Playlab x Josh David'],
		['10/31/18', 14, 'PIN-UP x Jon Wang'],
		['10/31/18', 18, 'Chen Chen + Kai Williams'],
		['11/1/18', 14, 'Kevin Ma'],
		['11/1/18', 18, 'Paul Chang'],
		['11/2/18', 14, 'High Court x Aimee Chang'],
		['11/2/18', 18, 'Linyee Yuan / MOLD Magazine'],
		['11/5/18', 14, 'Montez Press'],
		['11/5/18', 18, 'Montez Press'],
		['11/6/18', 14, 'Hassan Rahim'],
		['11/6/18', 18, 'A-Trak'],
		['11/7/18', 14, '?'],
		['11/7/18', 18, 'Sue Chen x Nancy Whang x Sarah Law x Hannah Cheng'],
		['11/8/18', 14, 'Jing Liu'],
		['11/8/18', 18, 'Assemblymember Yuh-Line Niou'],
		['11/9/18', 14, 'Gerard Gonzalez'],
		['11/9/18', 18, 'Leong Leong'],
		['11/12/18', 14, 'Alain Sylvain'],
		['11/12/18', 18, 'Oana Stanescu'],
		['11/13/18', 14, 'JJJJound'],
		['11/13/18', 18, 'Rachael Yaeger'],
		['11/14/18', 14, 'Peter Ash Lee'],
		['11/14/18', 18, 'Andrew Fairweather x Sean Ferguson'],
		['11/15/18', 14, 'Tei Carpenter'],
		['11/15/18', 18, 'Joel Evey'],
		['11/16/18', 14, '?'],
		['11/16/18', 18, 'FOOD']
	]

	let todaysEvents = []
	for (var i = 0; i < schedule.length; i++) {
		let event = new Date(schedule[i][0]).getTime() / 1000
		let eventEnd = schedule[i][1]
		let eventDay = new Date(schedule[i][0]).getDate()

		let today = new Date().getTime() / 1000
		let currentTime = new Date().getHours() + 1
		let currentDay = new Date().getDate()
		console.log(currentDay, eventDay)
		console.log(currentTime, eventEnd)

		if ( currentDay == eventDay && currentTime < eventEnd ) {
			todaysEvents.push(schedule[i])
		}
	}

	if (todaysEvents.length == 0) {
		todaysEvents.push(schedule[0])
	} else {
		todaysEvents.sort(function(a,b) {
			return a[1] - b[1]
		})
	}

	console.log(todaysEvents)

	let title = $('#broadcast-title')
	title.text(todaysEvents[0][2])

















}