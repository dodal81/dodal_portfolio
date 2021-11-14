var btnCall = document.querySelector(".btnCall");
var menuMo = document.querySelector(".menuMo");


btnCall.onclick = function (e) {
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}
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
        $("#gnb>li").eq(index).find(".sub").hide();
    })
});

// document.body.style.cursor = 'none';

const result = document.querySelector(".result");

document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    result.style.left = mouseX + -20 +'px';
    result.style.top = mouseY + -10 + 'px';


    console.log(mouseX);
    console.log(mouseY);
});






