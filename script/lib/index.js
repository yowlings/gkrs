var banner = document.getElementsByClassName('banner-show')[0];
var list = document.getElementsByClassName('banner-list')[0];
var listLi = list.getElementsByTagName('li');

for (var i = 0; i < listLi.length; i++) {
  ( function( index ) {
    nick( index );
  } )( i );
  // listLi[i].style.backgroundImage = 'url(img/' + i + '.jpg)';
  // $(".banner-list img")[i].style.backgroundImage='url(../../img/' + i + '.png)';
  // console.log($(".banner-list img")[i])

}
//3.定义核心函数 该函数通过指定索引值查找元素 设置样式

function nick(num) {
  // list.style.marginLeft = -num * 100 + '%';
  list.style.marginLeft = -num * 100 + '%';
}
var index = 0;
var sid = setInterval(play,3000);
function play() {
  index++;
  // if (index > listLi.length - 1) {
  //   index = 0;
  // }
  index>
  nick(index);
}

banner.onmouseover = function() {
  clearInterval(sid);
}

banner.onmouseout = function() {
  sid = setInterval(play, 1000);
}
