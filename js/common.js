head.ready(function() {

	// sidemenu
	$('.js-btn').click(function() {
		$('body').addClass('is-fixed');
		$('.out').addClass('is-moved');
		$('.js-sidemenu').addClass('is-visible');
		$('.js-overlay').addClass('is-visible');
	});

	$('.js-overlay').click(function() {
		$(this).removeClass('is-visible');
		$('body').removeClass('is-fixed');
		$('.out').removeClass('is-moved');
		$('.js-sidemenu').removeClass('is-visible');
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
		infinite: false,
		centerPadding: '0'
	});

	$('.js-article').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.js-navigation',
		infinite: false
	});

	$('.js-article').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		var next = $(this).find('.slick-slide').eq(nextSlide).find('.article__bl').first().children('.article__img').data();
		console.log(nextSlide, next);
	});

	// news nav
	var swiperHeight = $('body').outerHeight() - $('.header').outerHeight();
	$('.swiper-slide').outerHeight(swiperHeight);

	var mySwiper = new Swiper ('.swiper-container', {
		speed: 500,
		direction: 'vertical',
		height: swiperHeight,
		scrollbarHide: true,
		onSlideChangeStart: function(swiper) {
			var nextSlide = $(swiper.slides[swiper.activeIndex]).find('.article__img').data();
			console.log(nextSlide);
		}
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
		$('body').addClass('is-fixed');
	});

	$('.js-more').click(function(e) {
		e.preventDefault();
		$('.js-more-popup').addClass('is-active');
		$('body').addClass('is-fixed');
	});

	$('.js-share-link').click(function(e) {
		e.preventDefault();
		$('.js-share-link-popup').addClass('is-active');
		$('body').addClass('is-fixed');
	});

	$('.js-link').click(function(e) {
		e.preventDefault();
		$(this).text('Скопировать ссылку');
		$(this).parent().addClass('-z-index');
		$(this).parent().clone().appendTo('.js-img-popup').find('.js-link').addClass('js-copy-btn');
		$('.js-copy-txt').addClass('-is-absolute');
		$('.js-img-popup').addClass('is-active');
		$('body').addClass('is-fixed');
	});


	$('.js-close').click(function() {
		$(this).parent().removeClass('is-active');
		$('.js-link').text('Поделиться');
		$('.js-link').parent().removeClass('-z-index');
		$('body').removeClass('is-fixed');
		$(this).parent().find('.article__img').remove();
	});

	// preloader
	var preloader = $('.js-preloader'),
		spinner   = preloader.find('.spinner');
	spinner.delay(2500).fadeOut();
	preloader.delay(3000).fadeOut('fast');

	// copy info
	$(document).on('click', '.js-copy-btn', function(e) {
		e.preventDefault();
		$(this).parents('.popup-wrap').find('.js-copy-txt input').select();
	});
});

