head.ready(function() {
	var articleHeight = $('.article__bl').outerHeight();

	function verticalHeight() {
		$('.js-vertical').css({height: articleHeight});
	}

	verticalHeight();

	// scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300
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
		variableWidth: true
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
	// $('.js-info').click(function() {
	// 	$('.js-popup').addClass('is-active');
	// });

	// $('.js-close').click(function() {
	// 	$('.js-popup').removeClass('is-active');
	// });
});

