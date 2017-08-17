var butDown = $(".but-down")[0];
var butDownList = $(".but-down-list");
butDown.addEventListener("click",function(){
    $(".but-down-list").stop(true).toggle(1000)
})
var btnlis = butDownList.find("ul li");
for(var i=0 ;i<btnlis.length; i++){

    btnlis[i].addEventListener("click",function(){
        $(".but-down-list").stop(true).toggle(1000)
    })

    console.log();
}