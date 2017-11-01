var videoShowBtn = $(".video-showBtn");
var videoShowContent = $(".video-showContent");
var video = $(".video-showContent").find("video");

videoShowBtn.on("click",function (e) {
    video[0].play()
});

$(".robots-torry .bs-example-modal-lg").on('hidden.bs.modal', function (e) {
    video[0].currentTime = 0;
    video[0].pause();
});