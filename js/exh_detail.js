$(function(){
  $('.content dd').hide();
  $('.content').on('click','dt a',function(e){
    e.preventDefault();
    $(this).addClass('selected');
    $(this).parent().next('dd').slideToggle(300);
  });
  
  const initTarget = $('.tab li a.tab_on').attr('href');
  $(`section:not(${initTarget})`).hide();
  $('.tab').on('click','li a',function(e){
    e.preventDefault();
    if($(this).hasClass('tab_on')) return;
    $('.tab li a').removeClass('tab_on');
    $(this).addClass('tab_on');
    $('section').hide();
    $($(this).attr('href')).fadeIn('fast');
  });
  
  $('.reserve_btn').hide();
  $('body').scroll(function(){
    let sc_num = $(this).scrollTop();
    let h_num = $(this).height();
    if(sc_num>h_num/2){
      $('.reserve_btn').fadeIn();
    }else{
      $('.reserve_btn').hide();
    }
  });
});