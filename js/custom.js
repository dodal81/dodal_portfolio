var btnCall = document.querySelector(".btnCall");
var menuMo = document.querySelector(".menuMo");
const brand = document.querySelector("#brand");
const brand_on = brand.querySelectorAll("article");
console.log(brand_on);

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
 window.onload = function() {
    let brand_content = brand.querySelector(".brand_on");
    console.log(brand_content);
    brand_content.classList.remove("brand_on");
};
$(".brand_arrow").on("click", function(e){
    e.preventDefault();
    console.log(brand_on);
    let brand_target = $(e.target);
    brand_target.addClass(".brand_on");
});





