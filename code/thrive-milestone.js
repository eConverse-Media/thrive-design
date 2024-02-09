

    function handleMilestones() {
        $('.milestone').wrapAll('<div class="milestone-slider slick-dotted" />');
        $('.milestone-slider').slick({
            dots: true,
            arrows: true,
            infinite: false,
            autoplay: false,
            centerMode: true,
            centerPadding: 'calc(50% - 250px)',
            prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        centerPadding: '300px'
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        centerPadding: 0
                    }
                }
            ]
        });

        $('.milestone-slider button.prev-arrow').clone().appendTo('.milestone-slider');
        $('.milestone-slider button.next-arrow').clone().appendTo('.milestone-slider');
    }


    $(function(){
        handleMilestones();
    });