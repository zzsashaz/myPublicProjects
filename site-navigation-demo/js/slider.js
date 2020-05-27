$(".carousel-nav").click(function () {
    let x= $(this).attr('id');
    $(".carousel-nav").removeClass("current-tab");
    $(this).addClass("current-tab");
    $(".carousel-inner").animate({
        left: -x*100+"%"
    }, 800);
});
