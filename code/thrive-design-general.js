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

function handleAjaxCall(self) {
    var href = $(self).find('h3 a').attr('href');

    // handle image 

    var imgContainer = '<div class="img-container loading" />';
    $(self).prepend(imgContainer);
    $.ajax({
        url: href,
        dataType: 'html',
        success: success
    });
    
    function success(resp) {
        var img = $(resp).find('.blogs-block > div[id*="UpdatePanel"] > .row:not(.margin-bottom-medium) > .col-md-12 img:first-of-type'),
            src = $(img).attr('src');

        if (!!src) {
            var url = "url('" + src + "')";
            $(self).find('.img-container').css('background-image', url);
            $(self).find('.img-container').removeClass('loading');
        }
            
    }
}

function handleLibraryAjax(self, asBackground) {
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
        var img = $(resp).find('div[id*="DetailPanel"] > .row  .row.margin-bottom-medium > .col-md-12 img:first-of-type'),
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

$(function () {
    handleInteriorPadding();
    handleLinkCards();
});