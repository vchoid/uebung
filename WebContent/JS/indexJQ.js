'use strict';
jQuery(document).ready(function($) {
    /*
    <div id='overlay'></div>
    <div id="overlay-container">
        <img id="overlay-img" src="../IMG/Hydrangeas.jpg" alt="">
    </div>
    */
    $(".gallery-item").click(function(event) {
        event.preventDefault();
        let overlay = $.parseHTML("<div id='overlay'></div>");
        $("body").append(overlay);

        let img = $.parseHTML("<img id='overlay-img'></img>");
        let src = $(this).attr("src");
        $(img).attr("src", src);

        let container = $.parseHTML("<div id='overlay-container'></div>");
        $(container).append(img);
        $("body").append(container);
        $(container).click(function() {
            $('#overlay').remove();
            $("#overlay-container").remove();
        });
        $(document).keydown(function(event) {
            if (event.key == "Escape") {
                $('#overlay').remove();
                $("#overlay-container").remove();

            }
        })
    })
});