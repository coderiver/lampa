head.ready(function() {
	$.nonbounce();
	// hammer used to get more control on swipe
	var horz = document.getElementById('js-horz');
	var nav = document.getElementById('js-nav');
	var vert = document.getElementById('js-vert');

	// 3 sliders
	if ($('#js-horz').length > 0) {
		Hammer(horz).on('swipeleft', function() {
			$('.js-article').slick('slickNext');
		});
		Hammer(horz).on('swiperight', function() {
			$('.js-article').slick('slickPrev');
		});
	}
	if ($('#js-nav').length > 0) {
		Hammer(nav).on('swipeleft', function() {
			$('.js-navigation').slick('slickNext');
		});
		Hammer(nav).on('swiperight', function() {
			$('.js-navigation').slick('slickPrev');
		});
	}
	if ($('#js-vert').length > 0){
		var mc = new Hammer(vert);
		mc.get('swipe').set({
			direction: Hammer.DIRECTION_ALL,
			threshold: 5,
			velocity: 0.1
		});
		Hammer(vert).on('swipeup', function() {
			$('.js-slick-vertical').slick('slickNext');
		});
		Hammer(vert).on('swipedown', function() {
			$('.js-slick-vertical').slick('slickPrev');
		});
	}

	// sidemenu
	$('.js-btn').click(function() {
		$('body').addClass('is-overflow');
		$('.out').addClass('is-moved');
		$('.js-sidemenu').addClass('is-visible');
		$('.js-overlay').addClass('is-visible');
	});

	$('.js-overlay').click(function() {
		$(this).removeClass('is-visible');
		$('body').removeClass('is-overflow');
		$('.out').removeClass('is-moved');
		$('.js-sidemenu').removeClass('is-visible');
	});

	// scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300
	});

	// category navigation
	$('.js-navigation').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-article',
		centerMode: true,
		infinite: true,
		focusOnSelect: true,
		variableWidth: true,
		arrows: false,
		swipe: false
	});

	// article
	$('.js-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-navigation',
		infinite: true,
		swipe: false
	});

	// vertical
	$('.js-slick-vertical').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		mobileFirst: true,
		vertical: true,
		verticalSwiping: true,
		swipe: false
	});

	// gallery page
	$('.js-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true
	});

	// popup
	$('.js-info').click(function() {
		$('.js-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});

	$('.js-more').click(function() {
		$('.js-more-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});

	$('.js-close').click(function() {
		$('.js-popup').removeClass('is-active');
		$('.js-more-popup').removeClass('is-active');
		$('body').removeClass('is-overflow');
	});
});


