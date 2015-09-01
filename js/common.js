$(document).ready(function() {
	var slidr = $('.js-slidr');

	// category block
	$('.js-click').click(function(e) {
		e.preventDefault();
		$('.js-category').toggleClass('is-active');
	});

	// scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300,
		advanced: {
			updateOnSelectorChange: true
		}
	});

	// fancybox
	$('.js-fancy').fancybox({
		openEffect: 'fade'
	});

	// slider
	slidr.slick({
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

	function slickReinit() {
		slidr.slick('unslick');
		slidr.slick({
			fade: true,
			asNavFor: '.js-vertical'
		});
	}

	// toggle view from one to two cols
	$('.js-view').click(function(e) {
		e.preventDefault();
		$('.js-view').removeClass('is-active');
		$(this).addClass('is-active');

		if ($(this).hasClass('two-col')) {
			$('.js-main').addClass('is-two-col');
		} else {
			$('.js-main').removeClass('is-two-col');
		}

		if ($(this).hasClass('two-col') && $(window).height() < 769) {
			$('.js-article-outside').addClass('is-hidden');
			$('.js-article-inside').addClass('is-visible');
			slidr.addClass('is-small');
			slickReinit();
		} else {
			$('.js-article-outside').removeClass('is-hidden');
			$('.js-article-inside').removeClass('is-visible');
			slidr.removeClass('is-small');
			slickReinit();
		}
	});

	// small slider when two columns on resize
	$(window).resize(function() {
		if ($(window).height() < 769 && $('.js-view.two-col').hasClass('is-active')) {
			slidr.addClass('is-small');
			$('.js-article-outside').addClass('is-hidden');
			$('.js-article-inside').addClass('is-visible');
			slickReinit();
		} else {
			slidr.removeClass('is-small');
			$('.js-article-outside').removeClass('is-hidden');
			$('.js-article-inside').removeClass('is-visible');
		}
	});

	if ($(window).height() < 769 && $('.js-view.two-col').hasClass('is-active')) {
		slidr.addClass('is-small');
		$('.js-article-outside').addClass('is-hidden');
		$('.js-article-inside').addClass('is-visible');
	} else {
		slidr.removeClass('is-small');
		$('.js-article-outside').removeClass('is-hidden');
		$('.js-article-inside').removeClass('is-visible');
	}

	// popups
	$('.js-info').click(function(e) {
		e.preventDefault();
		$('.js-popup').addClass('is-active');
	});

	$('.js-copy').click(function(e) {
		e.preventDefault();
		$('.js-link').addClass('is-active');
	});

	$('.js-close').click(function() {
		$(this).parent().removeClass('is-active');
	});

	// vertical slider height
	// function verticalHeight(){

	// 	var v = $('.js-vertical');
	// 	var mainSliderHeight = $('.slidr').outerHeight();

	// 	v.css({height: mainSliderHeight});

	// 	$(window).resize(function(){
	// 		var mainSliderHeight = $('.slidr').outerHeight();
	// 		v.css({height: mainSliderHeight});
	// 	});

	// }

	// verticalHeight();
});

