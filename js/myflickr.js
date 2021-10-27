$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.people.getPhotos",
    //url:"https://www.flickr.com/services/rest/?method=flickr.interestingness.getList", 
    dataType:"json", 
    data:{
        api_key:"585462c89320318d78d565f713b9b44e", 
        per_page:10, 
        format:"json",
        nojsoncallback:1, 
        privacy_filter : 5, 
        user_id : "194107829@N07"
        // tags :"mood" 
    }
})
.success(function(data){    
    
    let items = data.photos.photo; 
    console.log(items);
   
    $("#gallery_page").append("<ul>");
   
    $(items).each(function(index, data){
        let text = data.title;        
        if(!data.title){          
            text = "No description in this photo"; 
        }

        $("#gallery_page ul")
            .append(
                $("<li>")   
                    .append(
                        $("<div>").append(
                            $("<a>").attr({
                                href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                            })
                            .append(                            
                                $("<img class='thumb'>").attr({
                                    src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                                })
                            ),
                            $("<p>").text(text)  
                                                     
                        )
                    ) 
            )       
    }) 
    
    //img 태그요소가 완료된 이후 해당 img요소의 전체 갯수 구함
    const total = $("#gallery_page ul li").length;

    
    let imgNum=0;

    $("#gallery_page img").each(function(index, data){   
        data.onerror = function(){
            $(data).attr("src", "img/error01.jpg");
        }
        
        data.onload = function(){            
            imgNum++;
            console.log(imgNum);
           
            
            if(imgNum === total){   
                
                $(".loading").addClass("off");

                new Isotope("#gallery_page ul",{
                    itemSelector : "#gallery_page ul li",
                    columnWidth: "#galley_page ul li",                  
                    transitionDuration: "0.5s"
                });   
                
               
                $("#gallery_page ul").addClass("on");
            }
        }        
    }); 
    
    
    
})
.error(function(err){
    console.err("데이터를 호출하는데 실패했습니다"); 
});


$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault(); 

    let imgSrc = $(this).children("a").attr("href"); 

    $("body").append(
        $("<div class='pop'>")
            .append(
                $("<img>").attr({ src : imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove(); 
});