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

    // handle carousel
    $('.HLAnnouncements ul').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: false,
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-regular fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>'
    });
}

function handleNewsAndResources() {
    $('.recent-news .HLRecentBlogs ul li, .ContentUserControl.featured-resources .HLMyDocuments ul li').each(function () {
        var self = $(this);

        handleAjaxCall(self);
    });
}

$(function () {
    handleCommunityHtml();
    handleAnnouncements();
    handleNewsAndResources();
});