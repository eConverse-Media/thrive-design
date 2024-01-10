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

        if ($(link).parent().is('h3') ||
        $(this).hasClass('link-text') ||
        $(self).hasClass('icon-card') ||
        $(self).hasClass('icon-circle')) {
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

    $('.carousel-item').each(function(){
        var self = $(this);

        $(self).append('<div class="img-container" />');

        handleBgImage($(self), $(self).find('.img-container'));
        $(self).find('img').closest('p').remove();
        $(self).find('img').remove();
    });

    $('.carousel-item').wrapAll('<div class="make-carousel"></div>');

    $('.make-carousel:not(.hero)').slick({
        dots: true,
        arrows: true,
        infinite: true,
        fade: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
    });

    $('.make-carousel-tiles ul').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }}]
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
    if (!!($('.hero').html())) {
        var classList = $('.hero').attr('class').split(' ');
    
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('-bkgd') > -1 ||
            classList[i].indexOf('bg-') > -1) {
                return;
            }
        }

        $('.hero').each(function() {
            handleBgImage($(this), $(this));
        });

    }
}

function handlePageTitleBg() {
    var src = $('.page-title-bg img').attr('src');

    if (!!(src)) {
        handleBgImage($('.page-title-bg'), $('#InteriorPageTitle'));
        $('#InteriorPageTitle').addClass('has-bg-img');
    }
}

function handleImageCards() {

    $('.ContentItemHtml.card.img-card').each(function() {
        let Img = $(this).find('img');
        let ImgSrc = $(Img).attr('src');
        $(this).prepend('<div class="img-container" style="background-image: url('+ ImgSrc +'"></div> ');
        $(Img).parent().remove();
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
    $('.featured-cards ul li, .featured-resource.make-carousel-tiles ul li').each(function () {
        handleAjaxCall(this);
    });
}

function handleInteriorCards() {
    $('.list-tiles ul:not(.pagination) li, .list-tiles .blogs-block').each(function () {
        handleAjaxCall(this);
    });
}

function handleAllContentListIcons() {
    $('.SearchResults .Content ul li').each(function () {
        var self = $(this),
            href = $(self).find('h3 a').attr('href');

        if (href.indexOf('blog') > -1) {
            $(self).addClass('acl-blog');
        } else if (href.indexOf('viewdocument') > -1) {
            $(self).addClass('acl-library');
        } else if(href.indexOf('discussion') > -1) {
            $(self).addClass('acl-discussion');
        }else if(href.indexOf('event') > -1) {
            $(self).addClass('acl-event');
        }
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
    $('.people-you-should-know .HLLandingControl').append($('.suggested-contacts-btn'));
    handleImageCards();
    handleDiscussionByLine();
    handleFeaturedMember();
    handleBlogs();
    handleResources();
    handleFeaturedCards();
    handleAllContentListIcons();
    handleInteriorCards();
});