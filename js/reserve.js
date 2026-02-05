$(function(){
  $('.resv_detail div:last-child').on({
    'mouseenter':function(){
      $(this).find('p').stop().fadeIn('fast');
    },
    'mouseleave':function(){
      $(this).find('p').stop().fadeOut('fast');
    }
  });
});