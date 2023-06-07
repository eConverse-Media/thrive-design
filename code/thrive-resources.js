$(function () {

    $('.top-resources ul li, .featured-tile-slider ul li').wrapAll('<div class="featured-tile-slider-wrapper"></div>');

    $('.featured-tile-slider-wrapper').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });


    $('.featured-tile-slider ul:not(.slick-dots) > li').each(function () {
        handleLibraryAjax(this);
    });


    $('.latest-news-list .blogs-block, .featured-tile-slider ul li').each(function () {
        handleAjaxCall(this);
    });


});