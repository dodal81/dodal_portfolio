// 폼 입력 
class MyForm {

    constructor(selector, options) {

        if (!selector) {
            console.error("form 선택자는 필수 입력사항입니다");
            return;
        }
        this.init(selector);
        this.bindingEvent(options);
    }

    init(selector) {
        this.form = $(selector);
        this.btnSubmit = this.form.find("input[type='submit']");
    }

    bindingEvent(options) {

        options.forEach((opt) => {
            this.btnSubmit.on("click", (e) => {
                if (opt.type === "text" && opt.name === "userId") {
                    if (!this.isTxt(opt.name, opt.len)) e.preventDefault();
                }

                if (opt.type === "tel" && opt.name === "phone1") {
                    if (!this.isPhone(opt.name, opt.len)) e.preventDefault();
                }

                if (opt.type === "email") {
                    if (!this.isEmail(opt.name)) e.preventDefault();
                }
                if (opt.type === "password") {
                    if (!this.isPwd(opt.name[0], opt.name[1], opt.len)) e.preventDefault();
                }
            });
        });


    }

    isTxt(name, len) {

        if (len === undefined) len = 5;

        let txt = $("[name = " + name + "]").val();

        if (txt.length >= len) {
            $("[name = " + name + "]").parent().find("p").remove();
            return true;
        } else {

            $("[name = " + name + "]").parent().find("p").remove();
            $("[name = " + name + "]").parent().append(
                "<p>아이디를 " + len + "자 이상 입력하세요</p>"
            )
            return false;
        }

    }
    isPhone(name, len) {
        if (len === undefined) len = 11;

        let phone = $("[name = " + name + "]").val();

        if (!/-/.test(phone) && phone == len) {

            $("[name = " + name + "]").parent().find("p").remove();
            return true;

        } else {
            $("[name = " + name + "]").parent().find("p").remove();
            $("[name = " + name + "]").parent().append(
                "<p>-를 빼고" + len + "자 입력해주세요</p>"
            )
            return false;
        }
    }

    isEmail(name) {

        let txt = $("[name=" + name + "]").val();

        //txt에 @가 포함되어 있다면 
        if (/@/.test(txt)) {
            $("[name=" + name + "]").parent().find("p").remove();
            return true;
        } else {

            $("[name=" + name + "]").parent().find("p").remove();
            $("[name=" + name + "]").parent().append(
                "<p>@를 포함한 전체 메일 주소를 입력하세요.</p>"
            )
            return false;
        }
    }


    isPwd(name1, name2, len) {

        let pwd1 = $("input[name=" + name1 + "]").val();
        let pwd2 = $("input[name=" + name2 + "]").val();

        let num = /[0-9]/;
        let eng = /[a-zA-Z]/;
        let spc = /[~!@#$%^&*()_+-\[\]]/;

        if (pwd1 === pwd2 && pwd1.length >= len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)) {
            $("input[name=" + name1 + "]").parent().find("p").remove();
            return true;
        } else {
            $("input[name=" + name1 + "]").parent().find("p").remove();
            $("input[name=" + name1 + "]").parent().append(
                "<p>비밀번호는 " + len + "자 이상 영문자, 숫자, 특수문자를 포함해서 동일하게 써 주세요</p>"
            )
            return false;
        }
    }

}