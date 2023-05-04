$(function () {

    $('.top-resources ul li').each(function () {
        handleLibraryAjax(this);
    });

    $('.top-resources ul li').wrapAll('<div class="top-resource-slider"></div>');



    $('.top-resource-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });


});