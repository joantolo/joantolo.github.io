/**
 * Author: joantolo
 * Date: 2023-05-01
 */

$(function() {
	// Set menu highlight
	var menu_names = ["posts", "story", "experience", "contact"];
	var primary_color = "#2AFEA2";
	var pathname = window.location.pathname.split("/");
	for (var menu_name of menu_names)
		if (pathname.find(element => element === menu_name))
			$(".masthead a:contains(\""+menu_name+"\")").css("color", primary_color);
	
	// Set title the same height of menu
	$(".site-title").css("top", $(".visible-links").offset().top - $(window).scrollTop());
	
	// Configure menu animation for scroll
	var menu = $(".masthead");
	var menuHeight = menu.height();
	menu.css("transition", "all 0.3s ease-out");
	menu.css("top", "0");
	
	// Set cv position and animation
	var menu_cv = $(".menu-cv");
	menu_cv.insertAfter(".site-title");
	menu_cv.hide();
	
	var lastScrollTop = 0;
	$(window).scroll(function() {
		var currentScrollTop = $(this).scrollTop();
	
		if ($(window).width() >= 768) {
			if (currentScrollTop > lastScrollTop)
				menu.css("top", "-"+menuHeight+"px");
			else
				menu.css("top", "0");
			
			if (currentScrollTop > 100)
				menu_cv.fadeIn(500);
		}
	
		lastScrollTop = currentScrollTop;
	});
	
	// Hide menu when on small screen (based on greedy-navigation.js)
	var btn = $("nav.greedy-nav .greedy-nav__toggle");
	var vlinks = $("nav.greedy-nav .visible-links");
	var hlinks = $("nav.greedy-nav .hidden-links");
	
	function hideNavigation() {
		if ($(window).width() < 768) {
			var numOfVisibleItems = vlinks.children().length;
			while (numOfVisibleItems > 0) {
				vlinks.children().last().prependTo(hlinks);
				numOfVisibleItems--;
			}
	
			btn.removeClass('hidden');
		} else {
			btn.addClass('hidden');
		}
	}

	$(window).resize(function() {
		hideNavigation();
	});
	
	hideNavigation();
});
