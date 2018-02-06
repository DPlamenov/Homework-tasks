$('document').ready(function () {
    console.log("start");
    $( "#animate" ).animate({
        height: "100px",
        width: "200px"
    }, 5000, function() {
        console.log("ready");
    });
});