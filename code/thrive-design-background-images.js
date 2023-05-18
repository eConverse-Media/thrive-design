function handleBgImage(imgElem, elem) {
    var img = $(imgElem).find('img:first-of-type'),
        src = $(img).attr('src'),
        url = "url('" + src + "')";

    $(elem).css('background-image', url);
    $(img).addClass('sr-only');
    
    if ($(img).parent().prop('nodeName') == 'P') {
        $(img).unwrap();
    }
}

$(function () {
    $('.bg-image').each(function () {
        handleBgImage($(this), $(this));
    });
});