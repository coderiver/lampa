head.ready(function() {
	var horz = document.getElementById('js-horz');
	var nav = document.getElementById('js-nav');
	// var vert = document.getElementById('js-vert');
	// var options = {preventDefault: true};

	// hammer control swipe
	if ($('#js-horz').length > 0) {
		Hammer(horz).on('swipeleft', function() {
			$('.js-article').slick('slickNext');
		});
		Hammer(document.getElementById('js-horz')).on('swiperight', function() {
			$('.js-article').slick('slickPrev');
		});
	}
	if ($('#js-nav').length > 0) {
		Hammer(nav).on('swipeleft', function() {
			$('.js-navigation').slick('slickNext');
		});
		Hammer(document.getElementById('js-nav')).on('swiperight', function() {
			$('.js-navigation').slick('slickPrev');
		});
	}
	 //    Hammer(vert).on('swipeup', function() {
		// 	$('.js-slick-vertical').slick('slickNext');
		// });
		// Hammer(document.getElementById('js-vert')).on('swipedown', function() {
		// 	$('.js-slick-vertical').slick('slickPrev');
		// });

		// var hammertime = new Hammer(element, options);
		// hammertime.on('swipedown', function(ev){

		// });

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
		// scrollbarPosition: 'outside'
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

	$('.js-close').click(function() {
		$('.js-popup').removeClass('is-active');
		$('body').removeClass('is-overflow');
	});
});


