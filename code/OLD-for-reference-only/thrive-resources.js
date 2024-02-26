$(function () {





    $('.featured-tile-slider ul:not(.slick-dots) > li, .resources-list ul li').each(function () {
        handleLibraryAjax(this);
    });


    $('.latest-news-list .blogs-block, .featured-tile-slider ul li').each(function () {
        handleAjaxCall(this);
    });


});