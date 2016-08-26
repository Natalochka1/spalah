// function imgBg(block, img) {
// 	var srcImg = $(img).attr('src');
// 	$(block).css({'background-image': 'url('+srcImg+')'});
// }
	$('.fade').slick({
		dots: false,
		// arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});