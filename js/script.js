// event pada saat link di klik
$('.page-scroll').on('click', function(event) {
	if (this.hash !=='') {
		event.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 60
				}, 1000, 'easeInOutExpo'
		);
	}
});

// Parallax
$(window).scroll(function() {
	let wScroll = $(this).scrollTop();
	console.log(wScroll);

	$('.jumbotron img').css({
		'transform'	: 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform'	: 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform'	: 'translate(0px, '+ wScroll/1.2 +'%)'
	});
})