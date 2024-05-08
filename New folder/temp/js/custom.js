// JavaScript Document

$(document).ready(function(){		
	$('.toggle-btn').click(function(e){ 
		e.stopPropagation();
		$('.mob-nav-menu').fadeIn().toggleClass('open');
		$('.toggle-btn').toggleClass('is-active');
		$('body').toggleClass('no-scroll');		
	});
			
    $(".hp-carousel").slick({
    autoplay: true,
    slidesToShow: 1,
    dots: true,
	pauseOnHover: false,
    pauseOnFocus: false,
	arrows: false,
	speed: 1000,
	infinite: true,
	autoplaySpeed: 4000
	});	
	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });  
  
$('.glos-pagination a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 70
		}, 500, 'swing');
		event.preventDefault();
});

	
$('body').prepend('<a href="javascript:void();" class="back-to-top" title="Back to Top"><i class="fa fa-chevron-up"></i></a>');
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
	
$(".event-sld").slick({
        autoplay: !0,
        infinite: !0,
        slidesToShow: 6,
		slidesToScroll: 1,
        dots: false,
        pauseOnHover: !0,
        pauseOnFocus: !1,
        arrows: true,
        speed: 1500,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 1e3
            }
        }]
    })
	
});



