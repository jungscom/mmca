$(function(){
  $('.exh_list article').on({
    'mouseenter':function(){
      $(this).find('a').stop().fadeIn('fast');
    },
    'mouseleave':function(){
      $(this).find('a').stop().fadeOut('fast');
    }
  });

  /* $('#area').on('change',function(){
    const value = $(this).val();
    // 페이지 이동
    if(value){
      location.href = value;
    }
  });

  // select 설정
  const select = location.pathname.split('/').pop() || 'total_list.html';

  $('#area').find('option').each(function(){
    if($(this).val() === select){
      $(this).prop('selected',true);
    }
  }); */
  const select = location.pathname.split('/').pop() || 'total_list.html';

  $('#area').val(select).on('change',function(){
    if(this.value){
      location.href = this.value;
    }
  });
});