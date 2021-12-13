// const { init } = require("browser-sync");

$(document).ready(function () {
    setDateBox();
});

function setDateBox() {
    const date = new Date();
    const year = "";
    const com_year = date.getFullYear();

    $("#year").append("<option value=''>년도</option>");

    for (let i = (com_year - 50); i <= (com_year + 1); i++) {
        $("#year").append("<option value='" + i + "'>" + i + "년" + "</option>");
    }

    let month;
    $("#month").append("<option value=''>월</option>");
    for (let i = 1; i <= 12; i++) {
        $("#month").append("<option value='" + i +"'>" + i + "월" + "</option>");
    }
    
    let day;
    $("#day").append("<option value =''>일</");
    for(let i = 1; i <= 31; i++) {
        $("#day").append("<option value ='" + i + "'>" + i + "일" + "</option>");
    }
}

class Myform{
    constructor(selector, options){
        if(!selector) {
            console.error("form 선택자는 필수 입력사항입니다")
            return;
        }
        this.Infinity(selector);
        this.bindingEvent(options);
    }
    init(selector){
        this.form = $(selector);
        this.btnsubmit = this.form.find("input[type='submit']");
    }
    bindingEvent(options){
        options.forEach((opt)=>{
            this.btnsubmit.on("click", (e)=>{
                if(opt.type==="text"){
                    if(!this.isTxt(opt.name, opt.len)) e.preventDefault();
                }
                if(opt.type==="email"){
                    if(!this.isEmail(opt.name)) e.preventDefault();
                }
                if(opt.type==="check"){
                    if(!this.isCheck(opt.name)) e.preventDefault();
                }
                // if(opt.type==="select"){
                //     if(!this.isSelect(opt.name)) e.preventDefault();
                // }
                if(opt.type==="password"){
                    if(!this.isPwd(opt.name[0], opt.name[1], opt.len)) e.preventDefault();
                }
            });
        });
    }


    isTxt(name, len){
        if(len === undefined) len = 5;

        let txt = $("[name = "+name+"]").val();

        if(txt.length >= len){
            $("[name = "+name+"]").parent().find("p").remove();
            return true;
        }else {
            $("[name = "+name+"]").parent().find("p").remove();
            $("[name = "+name+"]").parent().append(
                "<p>아이디를 "+len+"자 이상 입력하세요</p>"
            )
            return false;
        }
    }
    isEmail(name){
        let txt = $("[name = "+name+"]").val();

        if(/@/.test(txt)){
            $("[name = "+name+"]").parent().find("p").remove();
            return true;
        }else{
            $("[name = "+name+"]").parent().find("p").remove();
            $("[name = "+name+"]").parent().append(
                "<p>@를 포함한 전체 메일 주소를 입력하세요.</p>"
            )
            return false;
        }
    }

    isCheck(name){
        let isCheck = $("input[name = "+name+"]").is(":checked");

        if(isCheck){
            $("input[name = "+name+"]").parent().find("p").remove();
            return true;
        }else{
            $("input[name = "+name+"]").parent().find("p").remove();
            $("input[name = "+name+"]").parent().append(
                "<p>필수 입력사항을 체크해 주세요</p>"
            )
            return false;
        }
    }
 
}
