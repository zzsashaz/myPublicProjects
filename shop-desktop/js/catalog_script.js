$( document ).ready(function() {

	$(".sorting_by").on("click",function(){
		if($(this).hasClass('active')){

		}else{
			$(".sorting_by").removeClass('active');
			$(this).addClass('active');
		}
	});
	$(".sorting_by").on("click",function(){
		if($(this).children(".arrow").hasClass('arrow-up')){
			$(this).children(".arrow").removeClass('arrow-up');
			$(this).children(".arrow").css({ WebkitTransform: 'rotate(' + 180 + 'deg)'});;
		}else{
			$(this).children(".arrow").css({ WebkitTransform: 'rotate(' + 0 + 'deg)'});;
			$(this).children(".arrow").addClass('arrow-up');
		}
	});



});