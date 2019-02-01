let visibleBio = false;

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

	$('#ff').click(function() {
		$('audio')[0].currentTime += 5
	})
	$('#rw').click(function() {
		$('audio')[0].currentTime -= 5
	})
	
	$('.podcast').click( function() {
		$('.title').removeClass('active')
		$(this).children('.title').addClass('active')
		let mp3 = $(this).attr('mp3')
		let bio = $(this).attr('bio')
		let title = $(this).children('.title').text()
		loadRadio(radio, mp3)
		loadBio(bio,  title)
	})

	// load first podcast
	let podcast = $('.podcast').eq(0)
	let mp3 = $(podcast).attr('mp3')
	// let bio = $(podcast).attr('bio')
	let title = $(podcast).children('.title').text()
	let file = '../bios/' + bio
	$('#bio').load(file, function(text, status) {
		$('#broadcast-title').text(title)
		// if( status == 'success') {
		// 	$('#nav .scroll').scrollTop(0)
		// 	visibleBio = true;
		// }
	})
	radio.src = '../audio/' + mp3
	radio.load()

	// previous code for setting/checking the schedule
	// schedule()
	// setInterval( schedule, 60000)
})

function showContent(content, navItem) {
	$('#content').children().removeClass('show');
	$('.nav-item').removeClass('selected')

	if ( content == '#program' && visibleBio == true) {
		$('#bio').addClass('show')
	} else {
		$('#bio').removeClass('show');
	}

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

function loadRadio(radio, mp3) {
	radio.src = '../audio/' + mp3
	radio.load()

	setTimeout( function() {
		play(radio)
	}, 300)
}

function loadBio(bio, title) {
	let file = '../bios/' + bio
	$('#bio').load(file, function(text, status) {
		$('#broadcast-title').text(title)
		if( status == 'success') {
			// $('#nav .scroll').scrollTop(0)
			$('#bio').addClass('show');
			visibleBio = true;
		} else {
			$('#bio').removeClass('show')
			visibleBio = false;
		}
	})
}









function schedule() {
	console.log('updating radio text')

	let schedule = [
		//////// test schedule //////////
		// ['10/24/18', 10, 11, 'Danny'],
		// ['10/24/18', 11, 13, 'Angela'],
		// ['10/24/18', 13, 14, 'Jean Radio Hour'],
		// ['10/24/18', 14, 17, 'Karen'],
		// ['10/24/18', 17, 18, 'MNDPC Radio Hour']
	]

	$('.block').each( function() {
		let event = $(this)
		let date = event.attr('date')
		let start = event.attr('start')
		let end = event.attr('end')
		let text = event.children('.title').text()
		let eventArray = [date, start, end, text]
		schedule.push(eventArray)
		// console.log(eventArray)
	})

	let todaysEvent = null
	for (var i = 0; i < schedule.length; i++) {
		let event = new Date(schedule[i][0]).getTime() / 1000
		let eventStart = schedule[i][1]
		let eventEnd = schedule[i][2]
		let eventDay = new Date(schedule[i][0]).getDate()

		let date = new Date()
		let today = date.getTime() / 1000
		let currentTime = date.getHours()
		let currentDay = date.getDate()
	 
		// console.log(currentTime);

		if ( currentDay == eventDay && currentTime >= eventStart && currentTime < eventEnd ) {
			todaysEvent = schedule[i]
		}
	}

	if (todaysEvent == null) {
		todaysEvent = ['', '', '', 'FOOD RADIO']
	}

	let title = $('#broadcast-title')
	title.text(todaysEvent[3])
}

	///////// OLD SCHEDULE JUST IN CASE //////////
	// let schedule = [
	// 	//////// test schedule //////////
	// 	// ['10/23/18', 16, 17, 'Danny 4-5'],
	// 	['10/23/18', 17, 18, 'Angela 5-6'],
	// 	['10/23/18', 18, 19, 'Jean 6-7'],
	// 	['10/24/18', 9, 10, 'Karen 7-8'],
	// 	['10/24/18', 11, 12, 'MNDPC 11-12'],

	// 	//////// real schedule starts //////////
	// 	['10/26/18', 11, 12, 'Preeti Sriratana'],
	// 	['10/26/18', 17, 18, 'Angela Dimayuga'],
	// 	['10/29/18', 11, 12, 'Jean Brownhill'],
	// 	['10/29/18', 13, 14, 'Karen Wong'],
	// 	['10/29/18', 14, 15, 'MNDPC'],
	// 	['10/29/18', 15, 16, 'Karen Wong'],
	// 	['10/29/18', 16, 18, 'MNDPC'],
	// 	['10/30/18', 10, 17, 'PlayLab'],
	// 	['10/30/18', 17, 18, 'Playlab x Josh David'],
	// 	['10/31/18', 10, 14, 'Felix Burrichter x Jon Wang'],
	// 	['10/31/18', 14, 17, 'Andrew Fairweather / NYPL'],
	// 	['10/31/18', 17, 18, 'Chen Chen + Kai Williams'],
	// 	['11/1/18', 13, 14, 'Kevin Ma'],
	// 	['11/1/18', 14, 18, 'Paul Chang'],
	// 	['11/2/18', 10, 12, 'High Court'],
	// 	['11/2/18', 12, 14, 'High Court x Aimee Chang'],
	// 	['11/2/18', 14, 18, 'Linyee Yuan'],
	// 	['11/5/18', 10, 18, 'Montez Press'],
	// 	['11/6/18', 10, 14, 'Hassan Rahim'],
	// 	['11/6/18', 15, 17, 'Mazdack Rassi'],
	// 	['11/6/18', 17, 18, 'A-Trak'],
	// 	['11/7/18', 14, 17, 'Tim Simonds'],
	// 	['11/7/18', 17, 18, 'Sue Chen x Nancy Whang x Sarah Law x Hannah Cheng'],
	// 	['11/8/18', 10, 14, 'Jing Liu'],
	// 	['11/8/18', 14, 18, 'Assemblymember Yuh-Line Niou'],
	// 	['11/9/18', 11, 12, 'Gerard Gonzalez'],
	// 	['11/9/18', 13, 14, 'Heron Preston'],
	// 	['11/9/18', 14, 17, 'Christian Pineda'],
	// 	['11/9/18', 17, 18, 'Leong Leong'],
	// 	['11/12/18', 10, 14, 'Alain Sylvain'],
	// 	['11/12/18', 14, 18, 'Oana Stanescu'],
	// 	['11/13/18', 13, 14, 'JJJJound'],
	// 	['11/13/18', 14, 18, 'Rachael Yaeger'],
	// 	['11/14/18', 10, 14, 'Peter Ash Lee'],
	// 	['11/14/18', 14, 17, 'Andrew Fairweather / NYPL'],
	// 	['11/14/18', 17, 18, 'Andrew Fairweather x Sean Ferguson'],
	// 	['11/15/18', 10, 13, 'Tei Carpenter'],
	// 	['11/15/18', 13, 14, 'Andrew Fairweather / NYPL'],
	// 	['11/15/18', 15, 18, 'Joel Evey'],
	// 	['11/16/18', 10, 13, 'FOOD NEW YORK'],
	// 	['11/16/18', 13, 14, 'Bunyamin Aydin'],
	// 	['11/16/18', 14, 18, 'FOOD NEW YORK']
	// ]