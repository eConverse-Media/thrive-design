function handleInteriorPadding() {
    var firstRow = $('#MainCopy_ContentWrapper > .row:first-child'),
        lastRow = $('#MainCopy_ContentWrapper > *:last-child').is('#MainCopy_extraPanel') ? $('#MainCopy_ContentWrapper > .row:nth-last-child(2)') : $('#MainCopy_ContentWrapper > .row:last-child');
    
    if ($(firstRow).hasClass('hl-secondary-row-bkgd') ||
    $(firstRow).hasClass('hl-primary-row-bkgd')) {
        $('#MainCopy_ContentWrapper').addClass('no-top-padding');
    }

    if ($(lastRow).hasClass('hl-secondary-row-bkgd') ||
    $(lastRow).hasClass('hl-primary-row-bkgd')) {
        $('#MainCopy_ContentWrapper').addClass('no-bottom-padding');
    }
}

function handleClickable() {
    $('.clickable').each(function () {
        var self = $(this),
            link = $(self).find('a'),
            onclick = $(link).attr('onclick'),
            href = $(link).attr('href');

        if (!!onclick) {
            $(self).wrapInner('<a onclick="' + onclick + '" />');
        } else {
            var target = $(link).attr('target'),
                rel = $(link).attr('rel');

            $(self).wrapInner('<a href="' + href + '" target="' + target + '" rel="' + rel + '" />');
            $(link).closest('p').addClass('card-link');
        }
        
        if ($(link).parent().is('h3') || $(this).hasClass('link-text')) {
            $(link).contents().unwrap();
        } else {
            $(link).hide();
        }
    });
}

function handleEvents() {
    $('.HLLandingControl.HLEventList ul li').each(function () {
        var self = $(this),
            month = $(self).find('.date-block .calendar-month span').text();

        month = month.substring(0, 3);
        $(self).find('.date-block .calendar-month').text(month);
    });
}

function handleSlider() {

    $('.slide').each(function(){
        const img = $(this).find('img');
        const HtmlContent = $(this).find('.HtmlContent');
        $(HtmlContent).append('<div class="img-container"></div>');
        const imgContainer = $(this).find('.img-container');
        const imgSrc = $(img).attr('src');
        $(imgContainer).css('background-image', 'url("'+ imgSrc + '")');
        $(img).hide();
    });

    $('.slide').wrapAll('<div class="slider"></div>');

    $('.slider:not(.hero)').slick({
        dots: true,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
    });

}

function handlePromoTile() {
    var promoTile = $('.promo-tile'),
        link = $(promoTile).find('a');

    if (!!($(link).attr('href'))) {
        $(promoTile).wrapInner('<a href="' + $(link).attr('href') + '" target="' + $(link).attr('target') + '" rel="' + $(link).attr('rel') + '" />');
        $(promoTile).find('a a').remove();
    }
}

function handleHero() {
    handleBgImage($('.hero-text'), $('.hero:not(.overlay-primary)'));
}

function handlePageTitleBg() {
    var src = $('.page-title-bg img').attr('src');

    if (!!(src)) {
        handleBgImage($('.page-title-bg'), $('#InteriorPageTitle'));
        $('#InteriorPageTitle').addClass('has-bg-img');
    }
}

function handleImageCards() {


    $('.ContentItemHtml.card.img').each(function() {
        $(this).wrapInner('<div class="text-container"></div>');
        let Img = $(this).find('img');
        let ImgSrc = $(Img).attr('src');
        $(this).prepend('<div class="img-container" style="background-image: url('+ ImgSrc +'"></div> ');
    });
}

function handleDiscussionByLine() {
    $('.discussions .HLLandingControl ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine'),
            bylineLink = $(byline).find('a'),
            postedIn = $(self).find('h5');

        // handle errant comma

        $(bylineLink).insertBefore(byline);
        var trimmedByline = $(byline).text().trim().slice(1, $(byline).text().trim().length);
        $(byline).text(trimmedByline);
        $(bylineLink).prependTo(byline);

        // handle community
        $(postedIn).find('a:not([id*="ContainerLink"])').insertAfter($(bylineLink));
        $(bylineLink).after(' in ');
        $(postedIn).hide();
    });
}

function handleFeaturedMember() {
    $('.member-card').each(function () {
        var self = $(this),
            img = $(self).find('img').closest('strong'),
            name = $(self).find('h3');

        $(img).wrap('<div class="user-details" />');
        $(name).appendTo('.user-details');
        $('p .user-details').unwrap();
    });
}

function handleByLineAndLink(self) {
    var img = $(self).find('a[id*="lnkDisplay"]'),
        byline = $(self).find('.ByLine'),
        bylineLink = $(byline).find('a');

    if (!!$(bylineLink).html()) {
        $(bylineLink).insertBefore(byline);
        
        var text = $(byline).text();
        text = $.trim(text);
        text = text.substring(4, text.length);
        text = $.trim(text);

        $(byline).text(text);
        $(byline).prepend(bylineLink);

    }

    if (!!($(img).find('img').attr('src'))) {
        $(img).prependTo(byline);
    }
}

function handleResources() {
    $('.col-md-6 .HLMyDocuments ul li').each(function() {
        var self = $(this);

        handleAjaxCall(self);
        handleByLineAndLink(self);
    });

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

function handleBlogs() {
    $('.col-md-6 .HLRecentBlogs ul li').each(function () {
        var self = $(this);

        // handle image

        handleAjaxCall(self);

        // handle byline and user image
        handleByLineAndLink(self);
    });
}

function handleFeaturedCards() {
    $('.featured-cards ul li').each(function () {
        handleLibraryAjax(this);
    });
}





$(function () {
    handleInteriorPadding();
    handleClickable();
    handleEvents();
    handleSlider();
    handlePromoTile();
    handleHero();
    handlePageTitleBg();
    $('.people-you-should-know').append($('.suggested-contacts-btn'));
    handleImageCards();
    handleDiscussionByLine();
    handleFeaturedMember();
    handleBlogs();
    handleResources();
    handleFeaturedCards();
});