function handleHero() {
    handleBgImage($('.hero-text'), $('.hero'));
}

function handleBlogs() {
    $('.HLRecentBlogs ul li').each(function () {
        handleAjaxCall(this);
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

$(function () {
    handleHero();
    handleBlogs();
    handlePromoTile();
});