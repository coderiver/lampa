head.ready(function() {

	//resize
	$(window).resize(function(){
		category();
		console.log($(window).width())
	});

	//category

	function category(){
		var w = $(window).width(),
			parent = $('.js-parent');

		if(w > 768){
			$('.js-click').click(function(e){
				e.preventDefault();
				$(this).closest(parent).find('.js-subcategory').removeClass('is-active');
				$(this).closest(parent).find('.js-category').toggleClass('is-active');
			});
		} else {
			$('.js-click').click(function(e){
				e.preventDefault();
				$(this).closest(parent).find('.js-category').removeClass('is-active');
				$(this).closest(parent).find('.js-subcategory').toggleClass('is-active');
			});
		}
	}

	category();

	//scroll
	$('.js-scroll').mCustomScrollbar({
		scrollInertia: 300
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