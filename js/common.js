$(document).ready(function() {

	// category block
	$('.js-click').click(function(e) {
		e.preventDefault();
		$('.js-category').toggleClass('is-active');
	});

	// scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300,
		advanced:{
			updateOnSelectorChange: true
		},
		callbacks:{
			onUpdate:function(){
				console.log("Scrollbars updated");
			}
		}
	});

	// slider
	$('.js-slidr').slick({
		fade: true,
		asNavFor: '.js-vertical'
	});

	// vertical
	$('.js-vertical').slick({
		vertical: true,
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: false,
		asNavFor: '.js-slidr',
		focusOnSelect: true,
		verticalSwiping: true
	});

	// fancybox
	$('.js-fancy').fancybox({
		openEffect: 'fade'
	});

	// toggle view from one to two cols
	$('.js-view').click(function (e) {

		e.preventDefault();
		$('.js-view').removeClass('is-active');
		$(this).addClass('is-active');

		if($(this).hasClass('two-col')){
			$('.js-main').addClass('is-two-col');
		} else{
			$('.js-main').removeClass('is-two-col');

			// fire slick reinit on view change
			// $('.js-vertical').slick('reinit');
		}

		// fire slick reinit on view change
		// $('.js-slidr').slick('reinit');

	});

	// popups
	$('.js-info').click(function(e){
		e.preventDefault();
		$('.js-popup').addClass('is-active');
		$('.js-link').removeClass('is-active');
	});

	$('.js-copy').click(function(e){
		e.preventDefault();
		$('.js-link').addClass('is-active');
		$('.js-popup').removeClass('is-active');
	});

	$('.js-close').click(function () {
		$(this).parent().removeClass('is-active');
	});

	// vertical slider height
	function verticalHeight(){

		var v = $('.js-vertical');
		var mainSliderHeight = $('.slidr').outerHeight();

		v.css({height: mainSliderHeight});

		$(window).resize(function(){
			var mainSliderHeight = $('.slidr').outerHeight();
			v.css({height: mainSliderHeight});
		});

	}

	verticalHeight();

});