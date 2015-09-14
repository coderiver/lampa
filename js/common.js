head.ready(function() {

	// hammer used to get more control on swipe
	var horz = document.getElementById('js-horz');
	var nav = document.getElementById('js-nav');
	var vert = document.getElementById('js-vert');
	var vert2 = document.getElementById('js-vert-2');

	if (window.innerHeight > window.innerWidth) {
	    $.nonbounce();
	}

	function someIdHorz(name, id) {
		Hammer(name).on('swipeleft', function() {
			$(id).slick('slickNext');
		});
		Hammer(name).on('swiperight', function() {
			$(id).slick('slickPrev');
		});
	}

	function someIdVert(name, id) {
		Hammer(name).on('swipeup', function() {
			$(id).slick('slickNext');
		});
		Hammer(name).on('swipedown', function() {
			$(id).slick('slickPrev');
		});
		$(id).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			// var mid = $("div.js-article div.slick-active div.article__bl[data-slick-index="+nextSlide+"]").find("div.article__img").attr("data-id");
			// getMaterialData(mid, nextSlide);
			console.log(name);
		});
	}

	// sliders
	if ($('#js-horz').length > 0) {
		someIdHorz(horz, '#js-horz');
	}
	if ($('#js-nav').length > 0) {
		someIdHorz(nav, '#js-nav');
	}
	if ($('#js-vert').length > 0) {
		var mc = new Hammer(vert);
		mc.get('swipe').set({
			direction: Hammer.DIRECTION_ALL,
			threshold: 5,
			velocity: 0.1
		});
		someIdVert(vert, '#js-vert');
	}
	if ($('#js-vert-2').length > 0) {
		var mc = new Hammer(vert2);
		mc.get('swipe').set({
			direction: Hammer.DIRECTION_ALL,
			threshold: 5,
			velocity: 0.1
		});
		someIdVert(vert2, '#js-vert-2');
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
		focusOnSelect: true,
		variableWidth: true,
		arrows: false,
		swipe: false,
		infinite: false,
		centerPadding: '0'
	});

	// article
	$('.js-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-navigation',
		swipe: false,
		infinite: false
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
		infinite: true
	});

	// popup
	$('.js-info').click(function() {
		$('.js-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});

	$('.js-more').click(function(e) {
		e.preventDefault();
		$('.js-more-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});

	$('.js-share-link').click(function(e) {
		e.preventDefault();
		$('.js-share-link-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});

	$('.js-link').click(function(e) {
		e.preventDefault();
		$(this).text('Скопировать ссылку');
		$(this).parent().addClass('-z-index');
		$('.js-img-popup').addClass('is-active');
		$('body').addClass('is-overflow');
	});


	$('.js-close').click(function() {
		$(this).parent().removeClass('is-active');
		$('.js-link').text('Поделиться');
		$('.js-link').parent().removeClass('-z-index');
		$('body').removeClass('is-overflow');
	});

});


