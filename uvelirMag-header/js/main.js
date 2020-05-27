$(".mobile-menu__trigger").click(function () {
    $(".mobile-menu").animate({
        left: "0"
        }, 700);
    $(".mobile-menu__shadow").show().animate({
        opacity: "0.8"
    }, 700);
});
$(".mobile-menu__shadow , .mobile-menu__close-button").click(function () {
    $(".mobile-menu").animate({
        left: "-270"
    }, 700);
    $(".mobile-menu__shadow").animate({
        opacity: "0"
    }, 700).hide(0);
});

