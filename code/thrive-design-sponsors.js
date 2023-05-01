$(function () {
    $('.sponsors > .col-md-12').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 'calc(50% - 600px)'
    });

    $('.sponsor .HtmlContent > p').contents().unwrap();
});