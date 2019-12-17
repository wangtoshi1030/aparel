
console.log(1233);




$(function () {
  $(".slick").slick({
    // // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
    // accessibility: true,
    // // 自動再生。trueで自動再生される。
    // autoplay: false,
    // // 自動再生で切り替えをする時間
    // autoplaySpeed: 3000,
    // // 自動再生や左右の矢印でスライドするスピード
    // speed: 400,
    // // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
    // pauseOnHover: true,

    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    // cssEase: 'linear',
    pauseOnHover: false,
  });


  $(".btn-for-top").on("click",function(){
    console.log("クリックした");
    let btn=$(".sidebar").offset().top;
    $("html,body").animate({scrollTop:btn},2300);
  })

  $(window).scroll(function (){
    $('.fade').each(function(){
        let up = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > up - windowHeight + 200){
            $(this).addClass('scrollin');
            }
        });
    });




});

