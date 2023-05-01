function handleCTATiles() {
    $('.cta-tile .HtmlContent').each(function() {
        handleLink(this);
    });
}

$(function () {
    handleCTATiles();
});