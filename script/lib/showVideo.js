var img = $(".video-img");
// var video = $(".video-js");
var videoIframe = $('.video-iframe');
var btnMadal = $(".btn-modal");
var videoXClose = $(".video-close");
var modalClose = $(".modal-close");

btnMadal.on("click",function (e) {
    img.hide();
    $(this).hide();
    modalClose.hide();
    videoXClose.show();
    modalClose.css("display","block");

});
$(".bs-example-modal-lg").on('hidden.bs.modal', function (e) {
    videoIframe.attr('src','data/xiaomi.mp4');
    img.show();
    btnMadal.show();
});

videoXClose.on("click", function (e) {
    img.show();
    btnMadal.show();
    modalClose.removeClass("in");
    modalClose.css("display","none");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
    /**
     *  点击后
     *  body => class=" modal-open "   style="padding-right:17px;"
     *
     *  modal-close => class=" modal-close in"  style="display:block; "
     *
     *  之后
     *          body :none;
     *       modal-close => style ="block"
     */

});
