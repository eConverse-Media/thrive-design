$(function(){

    $('.top-blogs .blogs-block').wrapAll('<div class="top-blogs-slider"></div>');

    $('.top-blogs-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        fade: true,
        autoplay: true
    });

});