// anzeigen
$(function () {
    "use strict";
    $("td#num").click(function () {
        $("#anzeige").append($(this).text());

    });
});
//rechnen
$(function () {
    "use strict";
    $("td#res").click(function () {
        $("input").val(eval($("#anzeige").text()));


    });
});
// alles löschen
$(function () {
    "use strict";
    $("td#C").click(function () {
        $("#anzeige").text("");
        $("#res").val(this.a);

    });
});

