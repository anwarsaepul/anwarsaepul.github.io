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
// About
$(window).on('load', function(){
	$('.pKiri').addClass('pTampil');
	$('.pKanan').addClass('pTampil');
});

$(window).scroll(function() {
	let wScroll = $(this).scrollTop();
	
	// Jumbotron
	$('.jumbotron img').css({
		'transform'	: 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform'	: 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform'	: 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// Portofolio
	if (wScroll > $('.portofolio').offset().top - 200) {
		
		$('.portofolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .img-thumbnail').eq(i).addClass('tampil')

			}, 300 * i+1);
		});
	}

	if (wScroll < $('.jumbotron').offset().top) {
		$('.portofolio .img-thumbnail').removeClass('tampil')
	}

})