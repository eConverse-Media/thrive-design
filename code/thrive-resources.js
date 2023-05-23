$(function () {

    $('.top-resources ul li, .featured-tile-slider ul li').wrapAll('<div class="featured-tile-slider-wrapper"></div>');

    $('.featured-tile-slider-wrapper').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.featured-tile-slider ul li').each(function () {
        handleLibraryAjax(this);
    });

    $('.featured-tile-slider ul li').each(function () {
        handleLibraryAjax(this);
    });


    $('.latest-news-list .blogs-block, .featured-tile-slider ul li').each(function () {
        handleAjaxCall(this);
    });


});