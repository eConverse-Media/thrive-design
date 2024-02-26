$(function () {
    $('.sponsors .slick-slider').slick('unslick');

    $('.sponsors > .col-md-12').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
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
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});