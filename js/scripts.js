$(document).ready(function ($) {
	$('.nav__btn').click(function(){
		$('.nav').toggleClass('show');
		$('.mouse__btn').toggleClass('show-nav');
	});

	function prevHeight(el){
		var height = 0;
	  	$.each(el.prevAll(), function (index, elem) {height += $(elem).outerHeight(true); });
	  	return height;
	};  

	$('a').click(function(){
		var elementClick = $(this).attr("href")
	  	var scrollTop = prevHeight($(elementClick));
	  	$('html, body').animate({
	      scrollTop: scrollTop
	    }, 800);
	});
})