// top button
$(function(){
    $('.pipe').mouseover(function(){
        $('.standing_mario>img').stop().animate({
            bottom: '0'
        }, 400, ),
        $('.top_txt').stop().animate({
            opacity: '1'
        }, 400, "linear");
    });
    $('.pipe').mouseout(function(){
        $('.standing_mario>img').stop().animate({
            bottom: '-70px'
        }, 300, ),
        $('.top_txt').stop().animate({
            opacity: '0'
        }, 100, "linear");
    });
    $('.mario_wrap').click(function(){
        $('.top_txt').stop().animate({
            opacity: '0'
        }, 100, "linear"),
        $(".mario").animate(
        {
            top: "-100px",
        },
        200
        ),
        $(".mario").animate(
            {
            top: "0px",
            },
            200
        ),
        $(".standing_mario>img").animate(
            {
            opacity: "0",
            },
            200
        ),
        $(".jumping_mario>img").animate(
            {
            opacity: "1",
            },
            200
        ),
        $(".jumping_mario>img").animate(
            {
            opacity: "0",
            },
            200
        ),
        $(".standing_mario>img").animate(
            {
            opacity: "1",
            },
            200
        );
    });
});


// main menu
$(function(){
    $('.m_menu1>li:nth-child(1) img').mouseover(function(){
        $('.m_menu1>li:nth-child(1) img').attr('src','images/nes_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(1)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu1>li:nth-child(1) img').mouseout(function(){
        $('.m_menu1>li:nth-child(1) img').attr('src','images/nes_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(1)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
    $('.m_menu1>li:nth-child(2) img').mouseover(function(){
        $('.m_menu1>li:nth-child(2) img').attr('src','images/snes_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(2)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu1>li:nth-child(2) img').mouseout(function(){
        $('.m_menu1>li:nth-child(2) img').attr('src','images/snes_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(2)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
    $('.m_menu1>li:nth-child(3) img').mouseover(function(){
        $('.m_menu1>li:nth-child(3) img').attr('src','images/gameboy_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(3)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu1>li:nth-child(3) img').mouseout(function(){
        $('.m_menu1>li:nth-child(3) img').attr('src','images/gameboy_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu1>li:nth-child(3)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(1) img').mouseover(function(){
        $('.m_menu2>li:nth-child(1) img').attr('src','images/nds_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(1)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(1) img').mouseout(function(){
        $('.m_menu2>li:nth-child(1) img').attr('src','images/nds_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(1)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(2) img').mouseover(function(){
        $('.m_menu2>li:nth-child(2) img').attr('src','images/wii_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(2)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(2) img').mouseout(function(){
        $('.m_menu2>li:nth-child(2) img').attr('src','images/wii_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(2)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(3) img').mouseover(function(){
        $('.m_menu2>li:nth-child(3) img').attr('src','images/switch_glow.png').css('transform','scale(1.02)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(3)>p').css('color','#fff').css('text-decoration','underline').css('transition','all 0.2s ease');
    });
    $('.m_menu2>li:nth-child(3) img').mouseout(function(){
        $('.m_menu2>li:nth-child(3) img').attr('src','images/switch_controller.png').css('transform','scale(1)').css('transition','all 0.1s linear');
        $('.m_menu2>li:nth-child(3)>p').css('color','rgba(0, 0, 0, 0.262)').css('text-decoration','none').css('transition','all 0.2s ease');
    });
});





// // ending animation
// setTimeout(function () {
//     $(".e_bm_wrap")
//       .css("display", "block")
//       .css("animation-play-state", "running");
//   }, 1000);

//   setTimeout(function () {
//     $(".e_bm").animate(
//       {
//         animation: "none",
//       },
//       100
//     ),
//       $(".e_bm_run1").animate(
//         {
//           opacity: "0",
//         },
//         10
//       ),
//       $(".standing_bm").css("display", "block");
//   }, 6000);

//   setTimeout(function () {
//     $(".castle_flag").animate(
//       {
//         top: "0",
//       },
//       1000
//     );
//   }, 7000);

//   setTimeout(function () {
//     $(".fireworks>img:nth-child(1)").css(
//       "animation-play-state",
//       "running"
//     ),
//       $(".fireworks>img:nth-child(2)").css(
//         "animation-play-state",
//         "running"
//       ),
//       $(".fireworks>img:nth-child(3)").css(
//         "animation-play-state",
//         "running"
//       ),
//       $(".fireworks>img:nth-child(4)").css(
//         "animation-play-state",
//         "running"
//       );
//   }, 8000);

//   setTimeout(function () {
//     $(".jumping_bm").css("display", "block"),
//       $(".jumping_bm")
//         .css("animation-play-state", "running")
//         .css("display", "block"),
//       $(".standing_bm").css("animation-play-state", "running"),
//       $(".left_peach").css("animation-play-state", "running"),
//       $(".front_peach").css("animation-play-state", "running");
//   }, 10000);




// scroll effect
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>7700) {
            $('body').css("background","#192148").css("transition","all 1s ease-in-out");
            // ending animation
setTimeout(function () {
    $(".e_bm_wrap")
      .css("display", "block")
      .css("animation-play-state", "running");
  }, 1000);

  setTimeout(function () {
    $(".e_bm").animate(
      {
        animation: "none",
      },
      100
    ),
      $(".e_bm_run1").animate(
        {
          opacity: "0",
        },
        10
      ),
      $(".standing_bm").css("display", "block");
  }, 6000);

  setTimeout(function () {
    $(".castle_flag").animate(
      {
        top: "0",
      },
      1000
    );
  }, 7000);

  setTimeout(function () {
    $(".fireworks>img:nth-child(1)").css(
      "animation-play-state",
      "running"
    ),
      $(".fireworks>img:nth-child(2)").css(
        "animation-play-state",
        "running"
      ),
      $(".fireworks>img:nth-child(3)").css(
        "animation-play-state",
        "running"
      ),
      $(".fireworks>img:nth-child(4)").css(
        "animation-play-state",
        "running"
      );
  }, 8000);

  setTimeout(function () {
    $(".jumping_bm").css("display", "block"),
      $(".jumping_bm")
        .css("animation-play-state", "running")
        .css("display", "block"),
      $(".standing_bm").css("animation-play-state", "running"),
      $(".left_peach").css("animation-play-state", "running"),
      $(".front_peach").css("animation-play-state", "running");
  }, 10000);
        }
        else if ($(this).scrollTop()>6600) {
            $('body').css("background","#e20019").css("transition","all 1s ease-in-out");
            $('.sec8_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec8_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec8_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec8_title>span:nth-child(5)').delay(700).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec8_title>span:nth-child(6)').delay(800).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec8_title>span:nth-child(7)').delay(900).animate({
                opacity: '1'
            }, 10, "linear");
        }
        else if ($(this).scrollTop()>5500) {
            $('body').css("background","#bb8743").css("transition","all 1s ease-in-out");
            $('.sec7_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec7_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec7_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
        }
        else if ($(this).scrollTop()>4500) {
            $('body').css("background","#71be59").css("transition","all 1s ease-in-out");
            $('.sec6_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec6_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec6_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
        }
        else if ($(this).scrollTop()>3500) {
            $('body').css("background","#b591de").css("transition","all 1s ease-in-out");
            $('.sec5_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(5)').delay(700).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(6)').delay(800).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(7)').delay(900).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec5_title>span:nth-child(8)').delay(1000).animate({
                opacity: '1'
            }, 10, "linear");
        }
        else if ($(this).scrollTop()>2800) {
            $('body').css("background","#fcb800").css("transition","all 1s ease-in-out");
            $('.sec4_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec4_title>span:nth-child(3)').delay(400).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec4_title>span:nth-child(4)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec4_title>span:nth-child(5)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
        }
        else if($(this).scrollTop()>1500) {
            $('body').css("background","#1e3996").css("transition","all 1s ease-in-out");
            $('.sec3_title>span:nth-child(2)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec3_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec3_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
            $('.mario_wrap').css('bottom','-110px').css('transition','all 0.5s ease');
        }
        if ($(this).scrollTop()>800) {
            $('.sec2_title>span:nth-child(1)').delay(300).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(2)').delay(400).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(3)').delay(500).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(4)').delay(600).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(5)').delay(700).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(6)').delay(800).animate({
                opacity: '1'
            }, 10, "linear");
            $('.sec2_title>span:nth-child(7)').delay(900).animate({
                opacity: '1'
            }, 10, "linear");
            $('.mario_wrap').css('bottom','0').css('transition','all 0.5s ease'); 
        }
        else if ($(this).scrollTop()>400) {
            $('body').css("background","cadetblue").css("transition","all 1s ease-in-out");
        } 
        else {
            $('body').css("background","#7286f7");
        }
    });
});


// slide option
$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      loop: true,
      controls: true,
      nextText: 'Next',
      prevText: 'Prev',
    });
  });


