$('document').ready(function () {
    console.log("start");
    $( "#animate" ).animate({
        height: "110px",
        width: "170px"
    }, 4000, function() {
        console.log("ready");
    });
});
