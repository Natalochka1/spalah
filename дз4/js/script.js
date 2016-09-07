
	
	

$(document).ready(function(){	
	$('.fade').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
		});


$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});



$(document).ready(function(){
    var controls = {
        video: $(".video"),
        playpause: $(".btn__play")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).text("Pause");    
        } else {
            video.pause();
            $(this).text("Play");
        }
                
        $(this).toggleClass("paused"); 
    });
});