$(document).ready(function(){	
	$('.fade').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});
  // });

$('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
});


// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// });