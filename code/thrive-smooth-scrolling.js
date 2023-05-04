function topOfPage() {
	$('body,html').animate({scrollTop: 0}, 500);
}

function scrollToLocation(val) {
	var headerHeight = !!($('#admin-toolbar').html()) ? ($('#MPOuterHeader').outerHeight() + 30) : $('#MPOuterHeader').outerHeight();
	var location = $(val).offset().top - headerHeight; 
	$('body,html').animate({scrollTop: location}, 500);
}