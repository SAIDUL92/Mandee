(function($) {
    "use strict";

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "767"
    });



    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $("header").removeClass("sticky");
        } else {
            $("header").addClass("sticky");
        }
    });
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $("#stats").removeClass("sticky");
        } else {
            $("#stats").addClass("sticky");
        }
    });


    // $('.bg-success').niceSelect();


    $('select').niceSelect();


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    //search-bar
    $('.bra-searchIcon').on('click', function() {
            $('.bra-searchInput').toggleClass('activee');
        })
        // End of search-bar
        // $('.price-selector').on('click', function() {
        //     $('.single-che').slideToggle(500);
        // })

    // $('.brand-select').on('click', function() {
    //     $('.single-one').slideToggle(500);
    // })


})(jQuery);