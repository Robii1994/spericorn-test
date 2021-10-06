// ThreeItem Slider
$('.threeItems').owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    margin:25,
    autoplay: false,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

// Fixed Header
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass('fixed-top');
    else sticky.removeClass('fixed-top');
});

// Scroll To Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("body").offset().top},"1000");return false})})


// preloader
$(window).on('load', function () {
    $('.preloader').fadeOut();
});