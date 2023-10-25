$(function () {
    if (!!($('.team').html())) {
        $('body').addClass('has-modal');
    }
	$('.team').each(function () {
		var self = $(this),
			classList = $(self).attr('class').split(' '),
			index = classList.length,
			klass = classList[index - 1],
			img = $(self).find('img'),
            name = $(self).find('h3'),
            position = $(self).find('h3 + p'),
			link = "<button type='button' onclick='openModal(\"" + klass + "\");'></button>",
			bioImage = $(img).clone(),
			bioSelector = '.bio.' + klass,
			bio = $(bioSelector).find('.HtmlContent');
			
        $(bio).wrapInner('<div class="bio-text" />');
        $(bioImage).prependTo(bio);
        $(bioImage).wrap('<div class="bio-image" />');
        $(position).clone().prependTo($(bio).find('.bio-text'));
		$(name).clone().prependTo($(bio).find('.bio-text'));
			
		// $(self).find('.HtmlContent').append(link);
		$(self).find('.HtmlContent').wrapInner('<div class="text-container" />');
		$(self).find('img').prependTo($(self).find('.HtmlContent'));
		$(self).find('img').wrap('<div class="img-container" />');
        $(self).wrapInner(link);
	});
	
	$('.bio').prepend('<button type="button" onclick="closeModal();" class="close-modal"></button>');
	
	$(document).keyup(function (e){
		if (e.keyCode == 27) {
			closeModal();
		}
	});
	$(document).click(function (e) {
		if ($(e.target).hasClass('bio-modal-open')) {
			closeModal();
		}
	});
});

function openModal(val) {
	var klass = '.bio.' + val;
	$(klass).addClass('open');
	$('body').addClass('bio-modal-open');
}

function closeModal() {
	$('.bio').removeClass('open');
	$('body').removeClass('bio-modal-open');
}