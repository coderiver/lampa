head.ready(function() {

	$(window).resize(function() {
		if($(window).width() < 769) {
			$('.js-category').removeClass('is-active');
		}
	});

	$('.js-click').click(function(e) {
		e.preventDefault();
		if($(window).width() > 768){
			$('.js-category').toggleClass('is-active');
		}
	});

	//scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300
	});

	//slider
	$('.js-slidr').slick({
		fade: true,
		asNavFor: '.js-vertical'
	});

	//vertical
	$('.js-vertical').slick({
		vertical: true,
		slidesToShow: 3,
		verticalSwiping: true,
		arrows: false,
		asNavFor: '.js-slidr',
		focusOnSelect: true
	});

	$('.js-fancy').fancybox({
		openEffect: 'fade'
	});

	$('.js-view').click(function (e) {

		e.preventDefault();
		$('.js-view').removeClass('is-active');
		$(this).addClass('is-active');

		if($(this).hasClass('two-col')){
			$('.article').addClass('is-two-col');
		} else{
			$('.article').removeClass('is-two-col');
		}
	});



});