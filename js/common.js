head.ready(function() {
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
		mobileFirst: true
	});

	// article
	$('.js-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-navigation',
		infinite: true,
		mobileFirst: true
	});

	$('.js-slick-vertical').on('swipe', function(event, slick, direction) {
		console.log('111')
	});

	// vertical
	$('.js-slick-vertical').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		mobileFirst: true,
		vertical: true,
		verticalSwiping: true
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


