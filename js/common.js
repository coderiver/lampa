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

	//sticky
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

});