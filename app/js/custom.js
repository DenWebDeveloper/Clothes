$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }
    ;
    $('body').removeClass('loaded');
});

/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
};
/* viewport width */
$(function () {
    /* placeholder*/
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });


    /* custom scroll */
    if ($('.scroll').length) {

        $(".scroll").each(function () {
            if ($(this).find('li').length > 6) {
                $(this).mCustomScrollbar({
                    autoExpandScrollbar: true,
                    advanced: {autoExpandHorizontalScroll: true}
                });
            }
        });

    }

    /* style form elements */
    if ($('.styled').length) {
        $('.styled').styler();
    }

    /* components */
    /*

    if($('.fancybox').length) {
        $('.fancybox').fancybox({
            margin  : 10,
            padding  : 10
        });

    */
    /* components */

    /* slider */
    if ($('.similar-products__slider').length) {

        $('.similar-products__slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            appendDots: '.similar-products__dots',
            slidesToShow: 3,
            arrows: false,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true

                    }
                },
                {
                    breakpoint: 775,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    /* if three slides then hide the buttons*/

    if($('.similar-products__slider .products__card').length <= 3) {
        $('.similar-products__next-slide,.similar-products__prev-slide').hide();
    } else {
        $('.similar-products__next-slide').click(function () {
            $('.similar-products__slider').slick('slickNext');
        });

        $('.similar-products__prev-slide').click(function () {
            $('.similar-products__slider').slick('slickPrev');
        });
    }


    /* accordeon */
    $(document).ready(function () {
        $('#accordeon-filter .acc-head').on('click', f_acc);
    });

    function f_acc() {
        $('#accordeon-filter .acc-body').not($(this).next()).slideUp(500).prev().removeClass('active');
        $(this).next().slideToggle(1000).prev().toggleClass('active');
    }
});


var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

};
$(window).bind('load', handler);
$(window).bind('resize', handler);



