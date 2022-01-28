$(document).ready(function(){
  $('#cssmenu1 ul li').click(function(){
    if($(this).hasClass('open')){
      $('#cssmenu1 ul li').removeClass('open');
    }else{
      $('#cssmenu1 ul li').removeClass('open');
      $(this).addClass('open');
      $(this).children('ul').css("display", "block");
      $(this).children('ul').css("z-index", "100");
    }
  });
});
