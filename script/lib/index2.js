var banner = $(".banner-show");
var list = $(".banner-list");
var lis = $(".banner-list>li");
var index = 0;


// function togle(num){
//   list.animate({marginLeft : -num*100 +'%'})
// }
// function play(){
//   index++;
//   if(index>lis.length-1){
//     list.css({marginLeft:-0*100 +'%'})
//     index = 1;
//   }
//   togle(index)
// }
// var timer = setInterval(play, 1000);
// banner.hover(function(){
//   clearInterval(timer)
// },function(){
//   timer=setInterval(play, 1000)
// })
//
//
//
//
//


function togle(num) {
     //list.animate({marginLeft:-num*1024})
    list.animate({marginLeft: -num * 100 + '%'})
}
function play() {
    index++;
    if (index > lis.length - 1) {
        list.css({marginLeft: 0});
        index = 1
    }
    togle(index)
}

var timer = setInterval(play, 5000);
banner.hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(play, 1000)
});

var butDown = $(".but-down")[0];
var butDownList = $(".but-down-list");
butDown.addEventListener("click", function () {
    $(".but-down-list").stop(true).toggle(1000)
})
var btnlis = butDownList.find("ul li");
for (var i = 0; i < btnlis.length; i++) {
    btnlis[i].addEventListener("click", function () {
        $(".but-down-list").stop(true).toggle(1000)
    })

}
