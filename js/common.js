head.ready(function() {
	var articleHeight = $('.article__bl').outerHeight();

	function verticalHeight() {
		$('.js-vertical').css({height: articleHeight});
	}

	verticalHeight();

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

	// $('.article__bl').mCustomScrollbar( 'scrollTo', top, {
	// 	scrollInertia: 300
	// });

	// category navigation
	$('.js-navigation').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-article',
		centerMode: true,
		infinite: true,
		focusOnSelect: true,
		variableWidth: true,
		arrows: false
	});

	// article
	$('.js-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-navigation',
		infinite: true
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


