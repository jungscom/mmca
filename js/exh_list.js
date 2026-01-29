$(function(){
  $('.exh_list article').on({
    'mouseenter':function(){
      $(this).find('a').stop().fadeIn('fast');
    },
    'mouseleave':function(){
      $(this).find('a').stop().fadeOut('fast');
    }
  });
});