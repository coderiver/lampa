head.ready(function() {

	// $(window).resize(function() {
	// 	if($(window).width() < 769) {
	// 		$('.js-category').removeClass('is-active');
	// 	}
	// });

	//category block
	$('.js-click').click(function(e) {
		e.preventDefault();
		$('.js-category').toggleClass('is-active');
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

	//fancybox
	$('.js-fancy').fancybox({
		openEffect: 'fade'
	});

	//toggle view from one to two cols
	$('.js-view').click(function (e) {

		e.preventDefault();
		$('.js-view').removeClass('is-active');
		$(this).addClass('is-active');

		if($(this).hasClass('two-col')){
			$('.js-main').addClass('is-two-col');
		} else{
			$('.js-main').removeClass('is-two-col');
		}
	});

	//popup
	$('.js-info').click(function(){
		$('.js-popup').addClass('is-active');
	});

	$('.js-close').click(function () {
		$('.js-popup').removeClass('is-active');
	});

	//vertical slider height
	function verticalHeight(){

		var v = $('.js-vertical');
		var slide = v.find('.slick-active');

		var vh = slide.outerHeight() * slide.length - 20;
		v.css({'height': vh});

		$(window).resize(function(){
			var vh = slide.outerHeight() * slide.length - 20;
			v.css({'height': vh});
		});
	}

	verticalHeight();


});