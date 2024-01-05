function handleCommunityHtml() {
    if (!($('.commHTMLOptionsToAttach .summary-edit').html())) {
        $('.commHTMLOptionsToAttach').closest('.row-full').addClass('no-community-html');
    } else if (!!($('.summary-edit .Content img').attr('src'))) {
        $('.summary-edit .Content img').wrap('<div class="img-container" />');
        $('.summary-edit .Content > p > .img-container').unwrap();
        $('.summary-edit .Content > *:not(.img-container)').wrapAll('<div class="text-container" />');
    } else if (!!($('.summary-edit .Content ul li a'))) {
        $('.summary-edit .Content > *:not(ul)').wrapAll('<div class="text-container" />');
    }

    $('.summary-edit .Content .text-container').appendTo($('.summary-edit .Content'));
}

function handleAnnouncements() {
    $('.HLAnnouncements ul').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-regular fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>'
    });

    // handle link
    $('.HLAnnouncements ul li').each(function () {
        var self = $(this),
            link = $(self).find('.content-row a[id*="More"]'),
            href = $(link).attr('href'),
            target = $(link).attr('target'),
            rel = $(link).attr('rel'),
            h3 = $(self).find('h3');

        if (!!href) {
            $(h3).wrapInner('<a href="' + href + '" target="' + target + '" rel="' + rel + '" />');
        }
        
        $(link).remove();
    });
}

function handleSidebarResources() {
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

function handleNewsAndResources() {
    $('.recent-news .HLRecentBlogs ul li, .featured-resources .HLMyDocuments ul li').each(function () {
        var self = $(this);

        handleAjaxCall(self);
    });
}

$(function () {
    handleCommunityHtml();
    handleAnnouncements();
    handleSidebarResources();
    handleNewsAndResources();
});