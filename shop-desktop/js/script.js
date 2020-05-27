$( document ).ready(function() {

	$(".catalog_category__item").on("click",function(){
		if($(this).hasClass("open")){
			$(".catalog_category__item").removeClass('open');
			$(".catalog_category__drop").slideUp('slow');
		}else{
			$(".catalog_category__item").removeClass('open');
			$(".catalog_category__drop").slideUp('slow');
			$(this).addClass("open");
			$(this).find(".catalog_category__drop").slideDown('slow');
		}
	});



});