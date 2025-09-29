function handleCommunityHtml() {
    if (!($('.commHTMLOptionsToAttach .summary-edit').html())) {
        $('.commHTMLOptionsToAttach').closest('.row-full').addClass('no-community-html');
    } else if (!!($('.summary-edit .Content img').attr('src'))) {
        $('.summary-edit .Content img').wrap('<div class="img-container" />');
        $('.summary-edit .Content > p > .img-container').unwrap();
        $('.summary-edit .Content > *:not(.img-container)').wrapAll('<div class="text-container" />');
    } else if (!!($('.summary-edit .Content ul li a'))) {
        $('.summary-edit .Content > *:not(ul)').wrapAll('<div class="text-container" />');
    }

    $('.summary-edit .Content .text-container').appendTo($('.summary-edit .Content'));
}

function handleAnnouncements() {
    // Initialize the Slick Slider
    $('.HLAnnouncements ul').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="fa-regular fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="fa-regular fa-arrow-left"></i></button>'
    });

    // Handle wrapping the announcement title with its link
    $('.HLAnnouncements ul li').each(function () {
        var self = $(this),
            link = $(self).find('.content-row a[id*="More"]'),
            href = $(link).attr('href'),
            target = $(link).attr('target'),
            rel = $(link).attr('rel'),
            h3 = $(self).find('h3');

        if (!!href) {
            $(h3).wrapInner('<a href="' + href + '" target="' + target + '" rel="' + rel + '" />');
        }

        $(link).remove();
    });

    // **NEW CODE ADDED HERE**
    // This listens for a click on an edit button within the announcements
    $('.HLAnnouncements').on('click', '.btn-edit', function() { // TODO: Replace '.edit-button' with your actual selector
        // Find the parent announcement div by its partial ID
        var announcementDiv = $(this).closest('[id^="ctl00_MainCopy_ctl16_AnnouncementList_ctl"]');
        
        // Get the full, unique ID of that div
        var uniqueId = announcementDiv.attr('id');
        
        // Store that unique ID on your modal for the "Save" button to use later
        $('.modal').data('announcementId', uniqueId); // TODO: Replace '#yourEditModal'
        
        // Your code to populate the modal with content and open it would go here
        $('.modal').modal('show');
    });
}

function handleSidebarResources() {
    $('.HLMyDocuments .Content ul li').each(function () {
        var self = $(this);

        // handle icons
        var iconContainer = $(self).find('.libListReptEntAttchLble').parent();
        $(iconContainer).prependTo(self);
        $(self).find('.listIconContainer a').contents().unwrap();
        $(self).find('.listIconContainer img').parent().addClass('has-image');
        $(self).find('.listIconContainer').each(function () {
            var container = $(this);
            if (!($(container).find('> *').html())) {
                var text = $(container).text();
                text = $.trim(text);
                $(container).text(text);
            }
        });
    });
}

function handleNewsAndResources() {
    $('.recent-news .HLRecentBlogs ul li, .featured-resources .HLMyDocuments ul li').each(function () {
        var self = $(this);
        handleAjaxCall(self);
    });
}

$(function () {
    handleCommunityHtml();
    handleAnnouncements();
    handleSidebarResources();
    handleNewsAndResources();

    // Move all modals to be a direct child of <body> to fix positioning issues
   /* $('.modal').detach().appendTo('body');*/

    // Add a listener to all modals. When any modal is hidden, refresh the slider.
    $('.modal').on('hidden.bs.modal', function () {
        // Use 'setPosition' as it's more efficient for redraws than 'refresh'
        $('.HLAnnouncements ul').slick('setPosition');
    });
});