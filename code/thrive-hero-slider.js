/* function handleHeroCarousel() {
    $('.hero.slider .card').wrapAll('<div class="hero-carousel slick-dotted card" />').removeClass('card');
    $('.hero-carousel').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-regular fa-arrow-right"></i></button>'
    });
} */

/*** ERS Attempts Oct 13/23 ***/
function handleHeroCarousel() {
    $('.hero.make-carousel .carousel-item').wrapAll('<div class="hero-carousel slick-dotted" />');
    $('.hero-carousel').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-regular fa-arrow-right"></i></button>'
    });
}

$(function () {
    handleHeroCarousel();
});