$(function () {
    $(".hotUl li").click(function () {
        $(".hotUl li").removeClass("lineLi");
        $(this).addClass("lineLi");
        /*$(".hd-body").css({
            transform:"scale(0.3)",opacity:0
        })*/
        /*$(".hd-body").eq($(this).index()).css({
            transform:"scale(1)",opacity:1
        })*/
        $(".hd-body").children("div").css({
            transform:"scale(0)",opacity:0
        })
        $(".hd-body").eq($(this).index()).children("div").css({
            transform:"scale(1)",opacity:1
        })
    })
})

