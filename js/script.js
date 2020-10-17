// event pada saat link di klik
$('.page-scroll').on('click', function() {

	// Ambil isi href
	var tujuan = $(this).attr('href');
	
	// Menangkap element yg di klik
	var elementTujuan = $(tujuan);
// console.log(elementTujuan.offset().top);
// $(elementTujuan)
	// console.log($('body').scrollTop(elementTujuan.offset().top));
	// console.log($('body').scrollTop(400));
	console.log(tujuan);
	// console.log(elementTujuan.offset().top);
	// 	
	$(tujuan).click(function() {
		$(tujuan).slideDown(3000);
	})
	// .animate({
	// 	scrollTop: elementTujuan.offset().top - 50
	// }, 1250, 'swing');

	// e.preventDefault();



});