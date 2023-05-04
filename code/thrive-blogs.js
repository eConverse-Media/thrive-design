
$(function () {

    $('.top-blogs ul li').wrapAll('<div class="top-blogs-slider"></div>');

    $('.top-blogs').wrap('<div class="top blogs-slider-wrapper"></div>');

    $('.blogs-slider-wrapper ul li').each(function () {
        handleAjaxCall(this);
    });

    $('.thrive-blogs .blogs-block').each(function () {
        handleAjaxCall(this);
    });

    $('.top-blogs-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });


});