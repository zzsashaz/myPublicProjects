$(".productCard-like").click(function () {
    let likeIMG = $(this).find(".productCard-like-img");
    if ($(this).hasClass("liked")) {
        $(this).toggleClass("liked");
        likeIMG.css("transform","scale(0.8)")   ;
        likeIMG.attr("src","img/like.svg");
        setTimeout(function () {
            likeIMG.css("transform","scale(1)");
        }, 80 );
        return false;
    }
    else {
        $(this).toggleClass("liked");
        likeIMG.css("transform","scale(1.3)");
        likeIMG.attr("src","img/like-red.svg");
        setTimeout(function () {
            likeIMG.css("transform","scale(1)");
        }, 120 );
        return false;
    }
});
