'use strict';

jQuery.fn.lightbox = function() {

    function removeOverlay() {
        $('img#lightbox__overlay-img').addClass('out');
        $('.blur').addClass('fadeOut');
        setTimeout(function() {
            $('#lightbox__overlay-container').remove();
        }, 500);
    };

    $(document).keydown(function(event) {
        if (event.key == "Escape") {
            removeOverlay();
        }
    });

    $(this).click(function(event) {
        event.preventDefault();
        let img = $.parseHTML("<img id='lightbox__overlay-img'></img>");
        let src = $(this).attr("src");
        $(img).attr("src", src);
        $('#content').addClass('blur');
        $('#content').removeClass('fadeOut');

        let container = $.parseHTML("<div id='lightbox__overlay-container'></div>");
        $(container).append(img);
        $("body").append(container);
        $(container).click(function() {
            removeOverlay();
        });
    });
    return this;
};


// alternative Schreibweise!
/* let initLightbox = function(item) {

    $(item).click(function(event) {
        event.preventDefault();
        let overlay = $.parseHTML("<div id='lightbox__overlay'></div>");
        $("body").append(overlay);

        let img = $.parseHTML("<img id='lightbox__overlay-img'></img>");
        let src = $(this).attr("src");
        $(img).attr("src", src);

        let container = $.parseHTML("<div id='lightbox__overlay-container'></div>");
        $(container).append(img);
        $("body").append(container);
        $(container).click(function() {
            $('#lightbox__overlay').remove();
            $("#lightbox__overlay-container").remove();
        });
        $(document).keydown(function(event) {
            if (event.key == "Escape") {
                $('#lightbox__overlay').remove();
                $("#lightbox__overlay-container").remove();

            }
        })
    })
}; */