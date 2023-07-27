handleSearch = () => {
    $(".search-bar-top").wrap('<div class="search-wrap" />');
    $(".search-wrap").append(
        '<button class="search-btn-top" type="button" onclick="toggleSearch();"></button>'
    );
    $(".search-bar-top .form-control").attr("placeholder", "Search...");
    $("#searchColumn .form-control").attr("placeholder", "Search...");
    $(".homepage-search .SearchInputs .form-control").attr(
        "placeholder",
        "Search..."
    );

    $(".search-wrap").insertAfter("#MPSearchBlock");
    $(document).click(function (e) {
        var searchBar = $(".search-bar-top"),
            searchButton = $(".search-btn-top"),
            target = e.target;

        if (
            !$(target).is(searchBar) &&
            !$(target).is(searchButton) &&
            !$(target).closest(".search-bar-top").html() &&
            !$(target).closest(".search-btn-top").html()
        ) {
            closeSearch();
        }
    });

    if ($("#RibbitWelcome > .Login").length) {
        $(".search-wrap").addClass("not-logged-in");
    }
};

toggleSearch = () => {
    if ($(".search-wrap").hasClass("open")) {
        closeSearch();
    } else {
        openSearch();
    }
};

closeSearch = () => {
    $(".search-wrap").removeClass("open");
};

openSearch = () => {
    $(".search-wrap").addClass("open");
    $(".search-bar-top .form-control").focus();
};

$(function () {
    handleSearch();
});