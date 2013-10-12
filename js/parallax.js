$(document).ready(function() {

	if( !jQuery.browser.mobile) {
		/* Scroll event handler */
	    $(window).bind('scroll',function(e){
	    	parallaxScroll();
	    });
	};
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled 	= $(window).scrollTop();
	var NewPos 		= scrolled;

	$('.ObjectContainer.first').css('top', 200+scrolled*0.3 );
	$('.ObjectContainer.second').css('top', 600+scrolled*0.5 );
};