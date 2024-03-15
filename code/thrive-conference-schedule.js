$(() => {
    // Selecting the tabbed schedule container
    const $tabbedSchedule = $('.tabbed-schedule');

    // Creating static and fixed back-to-top buttons and adding them to the tabbed schedule container
    const $backToTopBtn = $('<button class="btn back-to-top static">Back to Top</button>').appendTo($tabbedSchedule);
    const $fixedBackToTopBtn = $backToTopBtn.clone().removeClass('static').addClass('fixed').appendTo($tabbedSchedule);

    // Obtaining the height of the navigation bar for scrolling offset
    const navbarHeight = $('#NAV').outerHeight();
    const threshold = 50; // Adjust as needed

    // Function to show a tab and scroll to it smoothly
    const showTabAndScroll = tabNumber => {
        const $matchingElement = $tabbedSchedule.find(`.row.${tabNumber}`).toggleClass('active', true).show().siblings().removeClass('active').hide();
        setTimeout(() => { updateUIVisibility(); smoothScrollToClass(tabNumber); }, 100);
    };

    // Function to smooth scroll to a specific class within the active tab
    const smoothScrollToClass = className => {
        const $activeRow = $tabbedSchedule.find('.row.active');

        if ($activeRow.length) {
            const $targetElement = className ? $activeRow.find(`.${className}`) : $activeRow.find('.schedule-announcement');

            if ($targetElement.length) {
                const targetOffset = $targetElement.offset().top - navbarHeight;
                $('html, body').stop().animate({ 'scrollTop': targetOffset }, 900, 'swing');
            }
        }
    };

    // Function to scroll to the top of the active tab
    const scrollToTop = e => {
        e.preventDefault();
        smoothScrollToClass();
    };

    // Event handlers for back-to-top buttons
    $backToTopBtn.on('click', scrollToTop);
    $fixedBackToTopBtn.on('click', scrollToTop);

    // Event handler for clicking on links within the announcement section
    $tabbedSchedule.on('click', '.ContentItemHtml.schedule-announcement ul li a', e => {
        e.preventDefault();
        smoothScrollToClass($(e.target).attr('href').slice(1));
    });

    $tabbedSchedule.on('click', '.schedule-tabs li a', function (e) {
        e.preventDefault();

        // Highlighting the clicked tab, hiding others, and scrolling to the top of the active tab
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        showTabAndScroll($(this).attr('href').slice(1));

        // Check if col-md-3 has position fixed
        if ($('.col-md-3').css('position') === 'fixed') {
            // Smooth scroll logic (replace with your actual smooth scroll function)
            smoothScrollToClass();
        }
    });

    // Triggering a click on the first tab to set it as active by default
    $('.schedule-tabs li:first-child a').trigger('click');

    // Function to update the visibility of the back-to-top button
    const updateUIVisibility = () => {
        const $activeRow = $tabbedSchedule.find('.row.active');
        const $activeAnnouncement = $activeRow.find('.ContentItemHtml.schedule-announcement');
        const $lastSibling = $activeAnnouncement.siblings(':last');
        const announcementBoxTop = $activeAnnouncement.offset().top - navbarHeight;
        const announcementBoxBottom = announcementBoxTop + $activeAnnouncement.outerHeight();
        const lastSiblingBottom = $lastSibling.offset().top + $lastSibling.outerHeight();
        const colMd3Element = $('.tabbed-schedule .col-md-3');
        const colMd3Bottom = colMd3Element.offset().top + colMd3Element.outerHeight();
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();

        // Checking if the user is 20px above the announcement bar
        const isAboveAnnouncement = announcementBoxTop - 20 < scrollPosition;

        // Checking if the active announcement is currently visible in the viewport
        const isAnnouncementVisible = announcementBoxTop < scrollPosition + windowHeight && announcementBoxBottom > scrollPosition;

        // Checking if the user is at the bottom of the last sibling
        const isAtBottomOfLastSibling = scrollPosition + windowHeight >= lastSiblingBottom;

        // Checking if the bottom of the .col-md-3 lines up with the bottom of the last sibling
        const isBottomAlignedWithLastSibling = Math.abs(colMd3Bottom - lastSiblingBottom) < threshold;

        // Toggling the 'fixed' class for .tabbed-schedule .col-md-3 based on the conditions
        colMd3Element.toggleClass('fixed', isAboveAnnouncement);
        colMd3Element.toggleClass('absolute', isAtBottomOfLastSibling && isBottomAlignedWithLastSibling);

        // Setting the top property for .tabbed-schedule .col-md-3.fixed
        if (!isAnnouncementVisible && (announcementBoxTop - 20 < scrollPosition)) {
            const navHeight = $('#NAV').outerHeight();
            colMd3Element.css({
                'position': 'fixed',
                'top': navHeight + 40 + 'px',
                'bottom': 'unset',
            });
            $('.col-md-9').css('float', 'right');
        } else {
            // Resetting styles if not above announcement or at the bottom
            colMd3Element.css({
                'position': '',
                'top': '',
                'bottom': '',
            });
            $('.col-md-9').css('float', ''); // Reset float property
            colMd3Element.removeClass('fixed').removeClass('absolute');
        }

        if ((isAtBottomOfLastSibling && isBottomAlignedWithLastSibling) || (isAtBottomOfLastSibling && colMd3Bottom > lastSiblingBottom)) {
            // When at the bottom of the last sibling container and aligned or scrolled past
            colMd3Element.css({
                'position': 'absolute',
                'top': '',
                'bottom': '30px', // Adjust as needed
            });
            $('.col-md-9').css('float', 'right'); // Reset float property
            colMd3Element.removeClass('fixed').addClass('absolute');
        }

        // Storing the current scroll position for reference in the next scroll event
        lastScrollTop = scrollPosition;

        // Checking if the user is outside the active announcement box and the static back-to-top button
        const isOutsideAnnouncement = announcementBoxBottom < scrollPosition || announcementBoxTop > scrollPosition + windowHeight;
        const isOutsideStaticButton = !$backToTopBtn.length || (scrollPosition + windowHeight < $backToTopBtn.offset().top || scrollPosition > $backToTopBtn.offset().top + $backToTopBtn.outerHeight());

        // Toggling the visibility of the fixed back-to-top button
        $fixedBackToTopBtn.toggle(isOutsideAnnouncement && isOutsideStaticButton);
    };

    // Listening for window scroll events to update the visibility of the fixed back-to-top button
    $(window).on('scroll', updateUIVisibility);
});
