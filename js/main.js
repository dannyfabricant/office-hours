$(document).ready( function() {
	$('.nav-item').click( function() {
		let content = $(this).attr('content')
		content = '#' + content
		let navItem = $(this)
		showContent(content, navItem)
	})
})

function showContent(content, navItem) {
	console.log(content)
	$('#content').children().removeClass('show');
	$('.nav-item').removeClass('selected')

	$(content).addClass('show')
	$(navItem).addClass('selected')
}