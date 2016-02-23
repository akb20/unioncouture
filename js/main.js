$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 100) {
        $(".logo").addClass("small")
    } else {
        $(".logo").removeClass("small")
    }
});
