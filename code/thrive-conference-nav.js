$(function () {
    let links = $('.conference-nav-tabs a');

    let currentPath = window.location.pathname;
    let currentLastSegment = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    links.each(function() {
        let linkPath = $(this).attr('href');
        
        // Check if the linkPath is the same as the currentLastSegment
        if (linkPath === currentLastSegment) {
            $(this).addClass('active');
        }
    });

    // Create and append the Font Awesome menu icon within a div using jQuery
    const menuIcon = $('<div class="menu-icon">Conference Nav<i class="fa-solid fa-bars"></i></div>');
    $('.conference-nav-tabs .HtmlContent').prepend(menuIcon);

    $('.menu-icon').on('click', function () {
        const navList = $('.conference-nav-tabs ul');
        navList.toggleClass('displayed'); // Toggle a class to control max-height

        // Toggle the icon between bars and "X"
        const icon = $('.menu-icon i');
        icon.toggleClass('fa-bars fa-xmark');
    });

    // Add click event listener to the document body to hide the tabs if clicked outside
    $(document.body).on('click', function (event) {
        const isMenuIconClicked = $(event.target).closest('.menu-icon').length > 0;
        const navList = $('.conference-nav-tabs ul');

        if (!isMenuIconClicked && !navList.is(event.target) && navList.has(event.target).length === 0) {
            // Clicked outside the menu icon and tabs, hide the tabs
            navList.removeClass('displayed');

            // Change the icon back to bars when hiding the tabs
            const icon = $('.menu-icon i');
            icon.removeClass('fa-xmark').addClass('fa-bars');
        }
    });
});
