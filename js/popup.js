// popup_box -----------------------------------------
var isCookie = document.cookie.indexOf("popup=done");
console.log(isCookie);
const popup = document.querySelector("#popup");
console.log(popup);


// if(isCookie == -1 ){
//     popup.show(); 
   
// }else{
    
//     popup.hide();
    
// }

$("#popup .close").on("click", function(e){
    e.preventDefault();

   
    var isChecked = $("#popup").find("input[type=checkbox]").is(":checked");

   
    if(isChecked) setCookie();

    $("#popup").hide();
});


function setCookie(time) {

    var today = new Date(); 
    var date = today.getDate();  

    today.setDate(date + time); 

    var duedate = today.toGMTString(); 

    
    document.cookie = "popup=done; expires="+duedate;
};