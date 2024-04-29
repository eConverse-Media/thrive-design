function handleAjaxCall(self, asBackground) {
    var href = $(self).find('h3 a').attr('href');

    // handle image 

    if (!asBackground) {
        var imgContainer = '<div class="img-container loading" />';
        $(self).wrapInner('<div class="text-container" />');
        $(self).prepend(imgContainer);
    }
    $.ajax({
        url: href,
        dataType: 'html',
        success: success,
        error: removeLoading
    });
    
    function success(resp) {

        var isBlog = !!($(resp).find('.blogs-block').html()),
            img,
            src;

        if (isBlog) {
            img = $(resp).find('.blogs-block .blog-featured-image-row img');

            if (!($(img).attr('src'))) {
                img = $(resp).find('.blogs-block > div[id*="UpdatePanel"] > .row:not(.margin-bottom-medium) > .col-md-12 img:first-of-type')

            }

            src = $(img).attr('src');
            if (src) {
                var url = "url('" + src + "')";
                if (asBackground) {
                    $(self).css('background-image', url);
                } else {
                    $(self).find('.img-container').css('background-image', url);
                }
                


                $(self).find('.img-container').addClass('no-ajax-image');
            } else {
                $(self).find('.img-container').addClass('no-ajax-image');
            }

        }

        src = $(img).attr('src');

        if (!!src) {
            var url = "url('" + src + "')";
            if (asBackground) {
                $(self).css('background-image', url);
            } else {
                $(self).find('.img-container').css('background-image', url);
            }
        } else {
            $(self).find('.img-container').addClass('no-ajax-image');
        }
        
        removeLoading();
    }

    function removeLoading() {
        $(self).find('.img-container').removeClass('loading');
    }
}