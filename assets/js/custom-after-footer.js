/**
 * Author: joantolo
 * Date: 2023-05-01
 */

// Set title the same height of menu
$(".site-title").css("top", $(".visible-links").offset().top - $(window).scrollTop());

// Configure menu animation for scroll
var menu = $(".masthead");
var menuHeight = menu.height();
menu.css("transition", "all 0.3s ease-out");
menu.css("top", "0");

var lastScrollTop = 0;
$(window).scroll(function() {
	var currentScrollTop = $(this).scrollTop();

	if (currentScrollTop > lastScrollTop)
		menu.css("top", "-"+menuHeight+"px");
	else
		menu.css("top", "0");
	
	lastScrollTop = currentScrollTop;
});
