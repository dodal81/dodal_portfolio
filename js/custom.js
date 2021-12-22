var btnCall = document.querySelector(".btnCall");
var menuMo = document.querySelector(".menuMo");
const brand = document.querySelector("#brand");
const brand_on = brand.querySelectorAll("article");

// 메뉴 토글
btnCall.onclick = function (e) {
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}

// 2depth바 메뉴바
$("#gnb>li").on("mouseenter", function () {
    $(this).find(".sub").show();


});
$("#gnb>li .sub").on("mouseleave", function () {
    // $(this).find(".sub").hide();
    $(this).hide();
});
$("#gnb>li").each(function (index) {
    $("#gnb>li").eq(index).find("a").on("focusin", function () {
        $("#gnb>li").eq(index).find(".sub").show();
    });
    $("#gnb>li").eq(index).find("a").last().on("focusout", function () {
        // $("#gnb>li").eq(index).find(".sub").on("focusout", function () {

        $("#gnb>li").eq(index).find(".sub").hide();
    })
});



// brand 클릭이벤트 
brand_on.forEach((btn,index)=>{
    brand_on.addEventListener("click",e=>{
       e.preventDefault();
       let isOn = e.currentTarget.classList.contains("on");
       if(isOn) return;   
       
       if(enableClick){
          enableClick = false;
          activation(btns,index);
          activation(boxs,index);
 
    
       }      
    })
 })
$(".brand_arrow").on("click", function(e) {
    e.preventDefault();
    $(".brand_arrow").parent().find("article").removeClass("brand_on");
});




