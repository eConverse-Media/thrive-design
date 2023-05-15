function handleBlogs() {
    $('.HLRecentBlogs ul li').each(function () {
        handleAjaxCall(this);
    });
}

$(function () {
    handleBlogs();
});