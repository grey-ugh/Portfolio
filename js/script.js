$(document).ready(function () {
	$("#logo, #main-menu, #feed_back, #order1, #order2, #order3").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href');
		var	top = $(id).offset().top
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});
});

$('.brands-items').slick({
	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false
});

lightbox.option({
	'wrapAround': true
});

$(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 1790) {
    	$('section').removeClass('.scrollsections');
    }
    else {
    	$('section').addClass('.scrollsections');
    }
 });