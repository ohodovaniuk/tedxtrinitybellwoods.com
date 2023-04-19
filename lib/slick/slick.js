(function($) {
    // USE STRICT
    "use strict";

    $('.slick4-item-overlay').hover(function() {
        //   if ($('.slick4').hasClass('slick-active')) {
        //  alert("easf")
        //$('.slick4-item').css()({
        //  "padding-left": "15px",
        // "padding-right": "15px"
        //});
        // $('.slick4-item:nth-child(1)').addClass("blue");
        /* padding-left: 15px;
        padding-right: 15px;*/
        //    }
        //  alert($('.slick4-wrap').width())
        // var w = $('.slick4-wrap').width() - 15;
        //  $('.slick4-wrap').css('width', w + 'px');
    });



    /* Slick 4
    ===========================================================*/
    $('.slick4-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        /*appendArrows: $('.art-slide-of-4'),*/
        prevArrow: '<button class="slick4-arrow slick4-arrow-prev"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slick4-arrow slick4-arrow-next"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})(jQuery);

/* Slick1 
===========================================================*/
function slick1() {
    $('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        appendDots: $('.slick1-wrap-dots'),
        dotsClass: 'slick1-dots',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        // appendArrows: $('.slick1-wrap'),
        prevArrow: '<button class="slick1-arrow slick1-arrow-prev"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slick1-arrow slick1-arrow-next"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
    });
}