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