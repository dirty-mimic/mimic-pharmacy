'use strict';
// フェードイン
  function fadeIn(){
    // フェードアップ
    $('.fadeUpTrigger').each(function(){// fadeUpTriggerクラスの各要素に対して
      let scroll = $(window).scrollTop();// スクロール位置を取得する
      let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
      let winHeight = $(window).height();// ウィンドウの高さを取得
      if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
        $(this).addClass('fadeUp');// fadeUpクラスを付与
      }else{
        $(this).removeClass('fadeUp');// fadeUpクラスを削除
      }
    });

    // フェードレフト
    $('.fadeLeftTrigger').each(function(){
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight){
        $(this).addClass('fadeLeft');
      }else{
        $(this).removeClass('fadeLeft');
      }
    });

    // フェードライト
    $('.fadeRightTrigger').each(function(){
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight){
        $(this).addClass('fadeRight');
      }else{
        $(this).removeClass('fadeRight');
      }
    });

    $('.fadeInDownTrigger').each(function(){
      let scroll = $(window).scrollTop();
      let triTop = $(this).offset().top + 100;
      let winHeight = $(window).height();
      if (scroll >= triTop - winHeight){
          $(this).addClass('fadeInDown');
      } else {
          $(this).removeClass('fadeInDown');
      }
  });

  $('.fadeInDownYTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
        $(this).addClass('fadeInDownY');
    } else {
        $(this).removeClass('fadeInDownY');
    }
});

  }

  $(window).scroll(function () {// スクロールしたら
    fadeIn();// 関数を実行
  });


  $(function () {
    $('header .drawer').on('click', function () {
      $('body').toggleClass('nav-open');
      $('header .header_nav').fadeToggle('200');
    });
    $('header li a').on('click', function() {
        $('body').toggleClass('nav-open');
        $('header .header_nav').fadeToggle(200);
          });
  });
