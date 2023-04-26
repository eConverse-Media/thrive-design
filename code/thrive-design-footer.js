function handleCopyrightAndAttribution() {
    $('#MPCopyright').appendTo('.footer-bottom-row > .col-md-6:first-child');
    $('#MPFooterLink').appendTo('.footer-bottom-row > .col-md-6:last-child');
}

$(function () {
    handleCopyrightAndAttribution();
});