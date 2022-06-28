'use strict';

let mySwiper = new Swiper ('.swiper', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  effect: 'fade',
  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },

  autoplay: {
    delay: 4000,
  },
  speed: 2000,
  fadeEffect: {
    crossFade: true,
  }


});
