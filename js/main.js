$(function () {
    "use strict";
//    for back to top
    
     new WOW().init();
    
    $(window).stellar();
    
    $("#bgndVideo").YTPlayer();
    
    $('.back_top').click(function(){
        $('html,body') .animate({
           scrollTop:0, 
        },1000);
    });
    
//    for fade in fade out
    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        if (scroll >= 500) {
            $(".back_top").fadeIn();
        }
        
        else {
            $(".back_top").fadeOut();
        }
        
        if(scroll >= 1){
            $(".navbar").addClass("sticky");
        }
        else{
            $(".navbar").removeClass("sticky");
        }
        
    });
    
    
    
  
    
//    for banner
$('#full_banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });

//    for screenshots
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        dots:true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
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
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:false,
                    arrows:true,
                }
    }
  ]
    });

//for venobox
  $('.play').venobox({
      spinner:'wave',
      autoplay:true,
  }); 

//for team
    $('.all_team').slick({
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.all-fb-img').slick({
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.all_txt',
        centerMode: true,
        centerPadding:0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                     centerPadding:0,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                     centerPadding:0,
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                     centerPadding:0,
                }
    }
  ]
    });

    $('.all_txt').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.all-fb-img',
         centerPadding:0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                     centerPadding:0,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                     centerPadding:0,
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                     centerPadding:0,
                }
    }
  ]
    });


});
