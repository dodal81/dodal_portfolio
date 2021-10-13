$.ajax({
    url : "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList",
    dataType :"json",
    data:{
        api_key :"585462c89320318d78d565f713b9b44e",
        per_page: 6,
        format: "json",
        nojsoncallback:1,
       
    }
})
.success(function(data){
    console.log(data.photos.photo);
    let items = data.photos.photo;

    $("#gallery").append("<ul>");

    $(items).each(function(index, data){
        
        let text = data.title;
        if(!data.title){
            text = "No"
        }

        $("#gallery ul")
        .append(
            $("<li>")
            .append(
                $("<a>").attr({
                    href :  "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                })
                .append(
                    $("<img>").attr({
                        src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                    })
                )
            )
            .append(
                $("<p>").text(text)
            )
        )
    })
    
})
.error(function(err){
    console.err("데이터를 호출하는데 실패했습니다.");
})
$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $("body").append(
        $("<div class = 'pop'>")
        .append(
            $("<img>").attr({src : imgSrc}),
            $("<span>").text("close")
        )
    )
});
$("body").on("click", ".pop span", function(){
    $(".pop").remove(); 
});