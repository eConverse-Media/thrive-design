$(function () {
    $('#MPAuxNav #AuxMenu').append('<div class="slideout-search" />');
    $('.slideout-search-btn').appendTo('.slideout-search');
    $('.slideout-search-bar').appendTo('.slideout-search');
    $('.slideout-search-bar button[id$="SearchButton"]').hide();
    $(document).bind('click', function (e) {
        if ($('.slideout-search-bar button').is(e.target)) {
            return;
        } else if (($('.slideout-search-btn').is(e.target) ||
            $('.slideout-search-btn i').is(e.target) ||
            $('.slideout-search-btn div').is(e.target)) &&
            !($('.slideout-search-bar').hasClass('open'))) {
            $('.slideout-search-bar').addClass('open');
            $('.slideout-search-btn').addClass('open');
            $('.slideout-search-bar button[id$="SearchButton"]').fadeIn();
            $('.slideout-search-bar input').focus();
        } else if ($('.slideout-search-bar').hasClass('open') &&
            !$('.SearchInputs .form-control').is(e.target)) {
            $('.slideout-search-bar').removeClass('open');
            $('.slideout-search-btn').removeClass('open');

        } else {
            return;
        }
    });
    $('.slideout-search-bar .input-group input[id$="SearchTerm"]').attr('placeholder', 'Search something here...');
});