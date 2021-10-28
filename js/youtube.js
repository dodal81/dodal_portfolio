// $.ajax({
//     url: "https://www.googleapis.com/youtube/v3/playlistItems",
//     dataType: "jsonp",
//     data: {
//         part: "snippet",
//         key: "AIzaSyDWjF6dR3xILcieZUrGTLlC602C6k9RYnU",
//         maxResults: 7,
//         playlistId: "PLHKeRbsUuhBdC-WTrs6vfnWFj8mHQWomO"
//     }
// })
//     .success(function (data) {

//         let items = data.items;
//         console.log(items);

//         $(items).each(function (index, data) {
//             let txt = data.snippet.title;
//             let len = txt.length;

//             if (len > 5) {
//                 txt = txt.substr(0, 5) + "..."
//             }

//             let date = data.snippet.publishedAt;
//             date = date.split("T")[0];

//             $("#vidGallery")
//                 .append(
//                     $("<article>")
//                         .append(
//                             $("<a>").attr({ href: data.snippet.resourceId.videoId })
//                                 .append(
//                                     $("<img>").attr({ src: data.snippet.thumbnails.high.url })
//                                 ),
//                             $("<div class = 'con'>")
//                                 .append(
//                                     $("<h2>").text(data.snippet.title)
//                                     // $("<p>").text(txt)
//                                 )
//                         )
//                 )
//         });
//     })
//     .error(function (err) {
//         console.error(err);
//     })

// $("body").on("click", "#vidGallery article a", function (e) {
//     e.preventDefault();

//     let vidId = $(this).attr("href");

//     $("body")
//         .append(
//             $("<div class = 'pop'>")
//                 .append(
//                     $("<iframe>")
//                         .attr({
//                             src: "https://www.youtube.com/embed/" + vidId,
//                             frameborder: 0,
//                             width: "100%",
//                             height: 600
//                         }),
//                     $("<span>").text("close")
//                 )

//         )
// });
// $("body").on("click", ".pop span", function () {
//     $(".pop").remove();

// });

getYoutube({
    frame : ".vidGallery",
    playlist : "PLHKeRbsUuhBdC-WTrs6vfnWFj8mHQWomO",
    num : 7
})

function getYoutube(opt) {
    if (opt.frame === undefined) console.error
        ("iframe속성값은 필수 입력사항입니다.");
    if (opt.playlist === undefined) opt.playlist = "PLHKeRbsUuhBdC-WTrs6vfnWFj8mHQWomO";
    if (opt.num === undefined) opt.num = 2;

    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/playlistItems",
        dataType: 'jsonp',
        data: {
            part: "snippet",
            key: "AIzaSyDWjF6dR3xILcieZUrGTLlC602C6k9RYnU",
            maxResults: opt.num,
            playlistId: opt.playlist
        }
    })
        .success(function (data) {
            let items = data.items;

            $(items).each(function (index, data) {

                let txt = data.snippet.description;
                let len = txt.length;
                if (len > 200) {
                    txt = txt.substr(0, 200) + "..."
                }
                let date = data.snippet.publishedAt;
                date = date.split("T")[0];

                $(opt.frame)
                    .append(
                        $("<article>")
                            .append(
                                $("<a>").attr({ href: data.snippet.resourceId.videoId })
                                    .append(
                                        $("<img>").attr({ src: data.snippet.thumbnails.high.url })
                                    ),
                                $("<div class = 'con'>")
                                    .append(
                                        $("<h2>").text(data.snippet.title),
                                        $("<p>").text(txt),
                                        $("<span>").text(date)
                                    )
                            )
                    )
            });
        })
        .error(function (err) {
            console.error(err);
        });

    $("body").on("click", opt.frame + " article a", function (e) {
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
                                allowfullscreen: true
                            }),
                        $("<span>").text("close")
                    )
            )
    });

    $("body").on("click", ".pop span", function () {
        $(".pop").remove();
    });
}