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

function handleLinkCards() {
    $('.card.link-card').each(function () {
        var self = $(this),
            link = $(self).find('a'),
            onclick = $(link).attr('onclick');
            
        $(self).find('i').prependTo($(self));
        
        $(self).wrapInner('<a onclick="' + onclick + '" />');

        $(link).unwrap();
        $(link).contents().unwrap();
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

    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
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
    handleBgImage($('.hero-text'), $('.hero'));
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
        $(this).wrapInner('<div class="text-content"></div>');
        let Img = $(this).find('img');
        let ImgSrc = $(Img).attr('src');
        $(this).prepend('<div class="img-container"><img src="' + ImgSrc + '"></div> ');
    });
}

$(function () {
    handleInteriorPadding();
    handleLinkCards();
    handleEvents();
    handleSlider();
    handlePromoTile();
    handleHero();
    handlePageTitleBg();
    $('.people-you-should-know').append($('.suggested-contacts-btn'));
    handleImageCards();
});