function handleResources() {
    $('.HLMyDocuments .Content ul li').each(function () {
        var self = $(this);

        // handle icons
        var iconContainer = $(self).find('.libListReptEntAttchLble').parent();

        $(iconContainer).prependTo(self);

        $(self).find('.listIconContainer a').contents().unwrap();
        $(self).find('.listIconContainer img').parent().addClass('has-image');

        $(self).find('.listIconContainer').each(function () {
            var container = $(this);

            if (!($(container).find('> *').html())) {
                var text = $(container).text();

                text = $.trim(text);
                $(container).text(text);
            }
        });
    });

}

function handleRecentNews() {
    $('.HLRecentBlogs ul li').each(function () {
        var self = $(this);

        handleAjaxCall(self);
    });
}

$(function () {
    handleResources();
    handleRecentNews();
});