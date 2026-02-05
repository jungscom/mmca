$(function(){
  $('.con_tit i').on('click',function(){
    history.back();
  });

  $('.menu_icon').on('click',function(){
    $('#menu_wrap').animate({right:'0'},400);
  });
  $('.menu_close').on('click',function(){
    $('#menu_wrap').animate({right:'-100%'},400);
  });
  
  /* $('#menu_wrap').on('mouseleave',function(){
    $('#menu_wrap').animate({right:'-100%'},400);    
  }); */
  $('#gnb > ul > li').on('click',function(){
    if($(this).children('ul').css('display')=='none'){
      $('#gnb > ul > li > ul').slideUp();
    }
    $(this).children('ul').slideDown();
  });

  $('.submenu li a').on('click',function(){
    $('.submenu li a').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.submenu li a.connect').on('click',function(){
    $('#menu_wrap').animate({right:'-100%'},400);
  });

  $('.top_btn').hide();
  $('body').scroll(function(){
    let sc_num = $(this).scrollTop();
    let h_num = $(this).height();
    if(sc_num>h_num/2){
      $('.top_btn').fadeIn();
    }else{
      $('.top_btn').hide();
    }
  });
});