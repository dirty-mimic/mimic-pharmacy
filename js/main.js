$(function(){

  $('.slideShow').slick({
    autoplaySpeed: 2500, // 自動再生の速度
    speed: 1200, // スライド自体の速度
    autoplay: true, // 自動再生の設定
    infinite: true, // 永続化
    slidesToShow: 4, // スライド数
    slidesToScroll: 4, // スライドのスクロール数
    arrows: true, // 矢印の表示
    prevArrow: '<div class="slick_prev"></div>', // 矢印部分のHTML変更
    nextArrow: '<div class="slick_next"></div>', // 矢印部分のHTML変更
    dots: true, // 下部ドットナビゲーションの表示
    pauseOnFocus: false, // フォーカス時の一時停止の設定
    pauseOnHover: false, // マウスホバー時の一時停止の設定
    pauseOnDotsHover: false, // ドットマウスホバー時の一時停止の設定,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          centerMode: true,

        },
      },
    ],
  });
  });

  window.onunload = function() {};
  function sizecheck() {
    w = window.innerWidth ? window.innerWidth : $(window).width();
    h = window.innerHeight ? window.innerHeight : $(window).height();
  }

  sizecheck();
  $(function () {
    if (w > 769) {
  } else {
    $("header .drawer").click(function(){
    $('body').toggleClass('nav-open');
    $('header .header_nav').fadeToggle(200);
      });
    $("header li a").click(function(){
    $('body').toggleClass('nav-open');
    $('header .header_nav').fadeToggle(200);
      });
    }
  });

  $('#area a').on('click', function () {
    let hrefElement = $(this).attr('href');
    let headerHeight = $('#area').outerHeight(true);
    let position = $(hrefElement).offset().top - headerHeight + 80;
    $('body,html').animate({
      scrollTop: position
    }, 500);
    return false;
  });
