var banner = $(".banner-show");
var list = $(".banner-list");
var lis = $(".banner-list>li");
var index = 0;


//function togle(num) {
//    list.animate({marginLeft: -num * 100 + '%'})
//}
//function play() {
//    index++;
//    if (index > lis.length - 1) {
//        list.css({marginLeft: 0});
//        index = 1
//    }
//    togle(index)
//}

//var timer = setInterval(play, 5000);
var timer=null;
var func = function(){
  timer = setTimeout(function(){
    index++;
    if (index > lis.length - 1) {
      list.css({marginLeft: 0});
      index = 1
    }
    list.animate({marginLeft: -index * 100 + '%'});
    func();
  },3000);
};

banner.hover(function () {
  clearInterval(timer);
}, function () {
  // timer = setInterval(play, 1000)
  func();
});
