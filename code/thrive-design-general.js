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

    $('.slide').wrapAll('<div class="slider"></div>');

    $('.slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

}

$(function () {
    handleInteriorPadding();
    handleLinkCards();
    handleEvents();
    handleSlider
});