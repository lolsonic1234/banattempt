$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        $(".ipadress").text(data.ip);
    });
});