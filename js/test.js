$(document).ready(function(){
  $('#cssmenu1 ul li').click(function(){
    var element = $(this);
    if(element.hasClass('open')){
      element.removeClass('open');
      element.children('ul').slideUp(200);
    }else{
      $('#cssmenu1 ul li').removeClass('open');
      element.addClass('open');
      element.siblings('li').children('ul').slideUp(200);
      element.children('ul').slideDown(200);
    }
  });
});

$(document).ready(function(){
  $('.location_select .location_tit a').click(function(){
     var element = $(this).parent('div');
     if(element.hasClass('On')){
     element.next('ul').slideUp(200);
     element.removeClass('On');
     }else{
     element.next('ul').slideDown(200);
     element.addClass('On');
     }
  });
});


/*
(function($){
$(document).ready(function(){

$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

});
})(jQuery);

(function($){
$(document).ready(function(){

$('#cssmenu1 li.active').addClass('open').children('ul').show();
	$('#cssmenu1 li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});




});
})(jQuery);
*/
