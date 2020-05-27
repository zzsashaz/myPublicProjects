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
	$(".info_block_nav_item").on("click",function(event){
		event.preventDefault();
		var tab_id = $(this).find("a").attr("href");
		$(".info_block_nav_item.active_link").removeClass("active_link");
		$(this).addClass("active_link");
		$(".info_block_item.active_info_block_item").removeClass("active_info_block_item");
		$(tab_id).addClass("active_info_block_item");
	});

	$(".small_product_img").on("click",function () {
		var new_src = $(this).attr("src");
		$(".main_product_img").attr("src", new_src);
	});

});