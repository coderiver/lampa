head.ready(function() {

	$('.js-slick').slick({
		fade: true
	});

	if ($('.js-slider').length > 0) {
		$('.js-slider').slick({
			fade: true
		});
		$(window).load(function() {
			$('.slick-next').each(function() {
				$(this).css('top', $('.js-slider img').outerHeight()/2);
			});
			$('.slick-prev').each(function() {
				$(this).css('top', $('.js-slider img').outerHeight()/2);
			});
		});
		$(window).resize(function() {
			$('.slick-next').each(function() {
				$(this).css('top', $('.js-slider img').outerHeight()/2);
			});
			$('.slick-prev').each(function() {
				$(this).css('top', $('.js-slider img').outerHeight()/2);
			});
			category();
		});

	};

	//search
	$('.js-search-btn').on('click', function() {
		$('.js-search').addClass('is-active');
		return false;
	});
	$('.js-search').each(function() {
		$('.js-search-close').on('click', function() {
			$('.js-search').removeClass('is-active');
			return false;
		});
	});

	//letter
	$('.js-letter-btn').on('click', function() {
		$('.js-letter').addClass('is-active');
		return false;
	});
	$('.js-letter').each(function() {
		$('.js-letter-close').on('click', function() {
			$('.js-letter').removeClass('is-active');
			return false;
		});
	});

	//sticky
	$('.page__container').each(function() {

		if ($(this).length > 0) {
			if ($(this).find('.page__sidebar').outerHeight() < $(this).find('.page__content').outerHeight()) {
				$(this).find('.js-side-sticky').addClass('js-sticky');
				$(this).find('.js-side-end').addClass('js-sticky-end');
				$(function(){ // document ready
					if (!!$('.js-sticky').length) { // make sure ".js-sticky" element exists
						var el = $('.js-sticky');
						var stickyTop = $('.js-sticky').offset().top; // returns number
						var footerTop = $('.js-sticky-end').offset().top; // returns number
						var stickyHeight = $('.js-sticky').height();
						var limit = footerTop - stickyHeight - 10;
						$(window).scroll(function(){ // scroll event
							var windowTop = $(window).scrollTop(); // returns number

							if (stickyTop-10 < windowTop){
								el.css({ position: 'fixed', top: 0 });
								el.addClass('is-active');
							}
							else {
								el.css('position','static');
								el.removeClass('is-active');
							}

							if (limit < windowTop) {
								var diff = limit - windowTop;
								el.css({top: diff});
							}
						});
					}
				});
			};
		};
	});

	//category

	function category(){
		if($(window).width() > 1000){
			$('.js-click').click(function(e){
				e.preventDefault();
				$(this).closest('.js-parent').find('.js-category').toggleClass('is-active');
			});
		} else{
			$('.js-click').click(function(e){
				e.preventDefault();
				$(this).closest('.js-parent').find('.js-subcategory').toggleClass('is-active');
			});
		}
	}

	category();

	//scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 450
	});

	//slider
	$('.js-slidr').slick({
		fade: true
	});

	//vertical
	$('.js-vertical').slick({
		vertical: true,
		slidesToShow: 3,
		verticalSwiping: true,
		arrows: false,
		asNavFor: '.js-slidr',
		focusOnSelect: true,
		infinite: false
	});

	$('.js-fancy').fancybox();

	$('.js-btn').click(function(){
		$(this).closest('.js-parent').find('.js-nav').toggleClass('is-active');
		$(this).toggleClass('is-active');
	});

});