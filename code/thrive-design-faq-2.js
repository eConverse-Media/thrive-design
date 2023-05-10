function checkForMobile() {
    var width = $(window).width();

    if (width < 992) {
        return true;
    }
}

function handleNavPlacement(isMobile) {
    if (isMobile) {
        $('.side-nav').css('top', 'auto');
    } else {
        var generalFAQScroll = $('.generalfaq').offset().top,
            headerHeight = $('#MPOuter').offset().top,
            location = window.pageYOffset;
    
        if (location <= (generalFAQScroll - headerHeight - 15)) {
            $('.side-nav').css('top', generalFAQScroll - location + 5);
        }
        if (location > generalFAQScroll) {
            $('.side-nav').css('top', headerHeight + 20);
        }
    }
}

function handleSideNavScroll() {

    var isMobile = checkForMobile();

    $(window).on('resize orientationChange', function () {
        isMobile = checkForMobile();
        handleNavPlacement(isMobile);
    });

    handleNavPlacement(isMobile);
    $(window).on('scroll', function () {
        handleNavPlacement(isMobile);
    });
}

$(function () {
    handleSideNavScroll();
});