$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDWjF6dR3xILcieZUrGTLlC602C6k9RYnU",
        maxResults: 7,
        playlistId: "PLHKeRbsUuhBdC-WTrs6vfnWFj8mHQWomO"
    }
})
    .success(function (data) {

        let items = data.items;
        console.log(items);

        $(items).each(function (index, data) {
            let txt = data.snippet.title;
            let len = txt.length;

            if (len > 5) {
                txt = txt.substr(0, 5) + "..."
            }

            let date = data.snippet.publishedAt;
            date = date.split("T")[0];

            $("#vidGallery")
                .append(
                    $("<article>")
                        .append(
                            $("<a>").attr({ href: data.snippet.resourceId.videoId })
                                .append(
                                    $("<img>").attr({ src: data.snippet.thumbnails.high.url })
                                ),
                            $("<div class = 'con'>")
                                .append(
                                    $("<h2>").text(data.snippet.title)
                                    // $("<p>").text(txt)
                                )
                        )
                )
        });
    })
    .error(function (err) {
        console.error(err);
    })

$("body").on("click", "#vidGallery article a", function (e) {
    e.preventDefault();

    let vidId = $(this).attr("href");

    $("body")
        .append(
            $("<div class = 'pop'>")
                .append(
                    $("<iframe>")
                        .attr({
                            src: "https://www.youtube.com/embed/" + vidId,
                            frameborder: 0,
                            width: "100%",
                            height: 600
                        }),
                    $("<span>").text("close")
                )

        )
});
$("body").on("click", ".pop span", function () {
    $(".pop").remove();

});