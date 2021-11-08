let posArr = [];
const $boxs = $(".myScroll");
const $btns = $("#navi li");
let len = $btns.length;
let baseLine = -300;

for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);
}
$(window).on("resize", function(){
    posArr = [];
    for(let i=0; i<len; i++){
        posArr.push($boxs.eq(i).offset().top);
    }
});
$(window).on("scroll", function(){
    let scroll = $(this).scrollTop();

    for(let i=0; i<len; i++){
        if(scroll >= posArr[i]+baseLine){
            $btns.children("a").removeClass("on");
            $btns.eq(i).children("a").addClass("on");

            $boxs.removeClass("on");
            $boxs.eq(i).addClass("on");
        }
    }
});

$("#navi li a").on("click", function(e){
    e.preventDefault(); 
 
    let target = $(this).attr("href");
    let targetPos = $(target).offset().top; 
 
    $("html,body").animate({ 
       scrollTop : targetPos
    }, 1000);
 }); 