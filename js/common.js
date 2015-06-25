head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.js-slick').slick({
		fade: true
	});

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

});