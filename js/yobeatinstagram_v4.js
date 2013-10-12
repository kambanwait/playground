// Increase this to increase the number of images included from each user
var imgLimit = 5;

var queued = 0;

$(function() {
    // #SkullCandySnow
    queued++;
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/SkullCandySnow/media/recent?client_id=d1685ded02da4c5eb2b08632f1256119&access_token=180837796.d1685de.462c1e08c835425cb9bf06ce4730f8a0",
        success: function(data) {
            queued--;
            for (var i = 0; i < imgLimit; i++) {
                var sctag = data.data[i].user.id;
                if (sctag === "10846752") {
                    addImage(data.data[i]);
                }
           }
           checkQueued();
        }
    });

    // scriptedpixels, user id - 28645252
    addUserImages(9892281);

    function addUserImages(id, sort)
    {
        queued++;
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/users/" + id + "/media/recent?client_id=d1685ded02da4c5eb2b08632f1256119&access_token=180837796.d1685de.462c1e08c835425cb9bf06ce4730f8a0",
            success: function(data) {
                queued--;
                for (var i = 0; i < imgLimit; i++) {
                    addImage(data.data[i]);
                }
                checkQueued();
            }
        });
    }

    function addImage(data)
    {
        $(".SC-IG-SCROLLER .items").append(
            '<div class="item" data-time="' + data.caption.created_time + '"><img class="SC-instagram-image" src="' +
            data.images.low_resolution.url + '" /><h3 class="scusername">@' +
            data.user.username + '</h3><span class="counts"><img src="images/skullcandyad_04.jpg"><h3 class="ig-likescount">' +
            data.likes.count + '</h3><h3 class="ig-commentscount">' + data.comments.count + '</h3></span></div>'
        );
    }

    function checkQueued()
    {
        if (queued > 0) {
            return;
        }

        // Sort the images to most recent first
        var items = $(".SC-IG-SCROLLER .items .item").get();
        items.sort(function(a, b) {
            return $(a).data('time') < $(b).data('time');
        });
        $.each(items, function(index, item) { $(".SC-IG-SCROLLER .items").append(item); });

        // Initialize the scroller
        $(".SC-IG-SCROLLER").scrollable({
            size: 1,
            clickable: false,
            circular: true,
            items: ".items",
            clonedclass: "cloned",
            loop: true
        }).autoscroll({interval:5000, steps:1, autoplay:true});

    }
});
