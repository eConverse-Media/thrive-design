$(function () {
    $('.sponsors > .col-md-12').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 'calc(50% - 592px)',
        responsive: [
            {
                breakpoint: 1216,
                settings: {
                    centerPadding: '8px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    centerMode: false
                }
            }
        ]
    });

    $('.sponsor .HtmlContent > p').contents().unwrap();
});