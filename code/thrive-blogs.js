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

    if (window.Sys && Sys.WebForms && Sys.WebForms.PageRequestManager) {
        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {


            // Call handleAjaxCall() function
            $('.featured-cards ul:not(.pagination) li, .featured-resource.make-carousel-tiles ul li').each(function () {
                handleAjaxCall(this);
            });

            $('.top-blogs-slider').each(function () {
                handleAjaxCall(this);
            });

            $('.thrive-blogs .blogs-block').each(function () {
                handleAjaxCall(this);
            });
        });
    }

});