

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
