

    function handleMilestones() {
        $('.milestone').wrapAll('<div class="milestone-slider slick-dotted" />');
        $('.milestone-slider').slick({
            dots: true,
            arrows: true,
            infinite: false,
            autoplay: false,
            centerMode: true,
            centerPadding: 'calc(50% - 250px)',
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
    }


    $(function(){
        handleMilestones();
    });