$(function () {

	$('.gallery').find('img').each(function(index){
		var src = $(this).attr('src');
		var rel = $(this).attr('alt');
		$(this).wrap('<a href="' + src + '" class="big" rel="' + rel + '"></a>');
	});
	
	// As A jQuery Plugin -->
	new SimpleLightbox('.gallery a', {
		// default source attribute
	sourceAttr: 'href',
	
	// shows fullscreen overlay
	overlay: true,
	
	// shows loading spinner
	spinner: true,
	
	// shows navigation arrows
	nav: true,
	
	// text for navigation arrows
	navText: ['&larr;','&rarr;'],
	
	// shows image captions
	captions: true,
	captionDelay: 0,
	captionSelector: 'img',
	captionType: 'attr',
	captionPosition: 'bottom',
	captionClass: '',
	captionHTML: false,
	
	// captions attribute (title or data-title)
	captionsData: 'title',
	
	// shows close button
	close: true,
	
	// text for close button
	closeText: 'X',
	
	// swipe up or down to close gallery
	swipeClose: true,
	
	// show counter
	showCounter: true,
	
	// file extensions
	fileExt: 'png|jpg|jpeg|gif',
	
	// weather to slide in new photos or not, disable to fade
	animationSlide: true,
	
	// animation speed in ms
	animationSpeed: 250,
	
	// image preloading
	preloading: true,
	
	// keyboard navigation
	enableKeyboard: true,
	
	// endless looping
	loop:  true,
	
	// group images by rel attribute of link with same selector
	rel: false,
	
	// closes the lightbox when clicking outside
	docClose:  true,
	
	// how much pixel you have to swipe
	swipeTolerance: 50,
	
	// lightbox wrapper Class
	className: 'simple-lightbox',
	
	// width / height ratios
	widthRatio: 0.8,
	heightRatio: 0.9,
	
	// scales the image up to the defined ratio size
	scaleImageToRatio: false,
	
	// disable right click
	disableRightClick: false,
	
	// show an alert if image was not found
	alertError:  true,
	
	// alert message
	alertErrorMessage: 'Image not found, next image will be loaded',
	
	// additional HTML showing inside every image
	additionalHtml: false,
	
	// enable history back closes lightbox instead of reloading the page
	history: true,
	
	// time to wait between slides
	throttleInterval: 0,
	
	// Pinch to <a href="https://www.jqueryscript.net/zoom/">Zoom</a> feature for touch devices
	doubleTapZoom: 2,
	maxZoom: 10,
	
	// adds class to html element if lightbox is open
	htmlClass: 'has-lightbox',
	
	// RTL mode
	rtl: false,
	
	// elements with this class are fixed and get the right padding when lightbox opens
	fixedClass: 'sl-fixed',
	
	// fade speed in ms
	fadeSpeed: 300,
	
	// whether to uniqualize images
	uniqueImages: true,
	
	// focus the lightbox on open to enable tab control
	focus: true
	});
	
	});