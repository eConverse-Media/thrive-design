function handleLink(self) {
    var link = !!($(self).find('h3 a').attr('href')) ? $(self).find('h3 a') : $(self).find('a'),
        href = $(link).attr('href'),
        target = $(link).attr('target');

    if (target == '_blank') {
        $(self).wrapInner('<a href="' + href + '" target="_blank" rel="noopener" />');
    } else {
        $(self).wrapInner('<a href="' + href + '" />');
    }

    if ($(link).parent().is('h3')) {
        $(link).contents().unwrap();
    } else {
        $(link).hide();
    }
}

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

$(function () {
    handleInteriorPadding();
    handleLinkCards();
});