
$(".hamburger").click(function () {
    $("#menu").css("left", "0");
});
$(document).click(function (event) {
    if (!$(event.target).closest('.hamburger, #menu').length) {
        $("#menu").css("left", "-240px");
    }
});
$("#colorBtn").click(function () {
    let colors = ["#f4f4f4", "#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff4cc"];
    let color = colors[Math.floor(Math.random() * colors.length)];
    $("body").css("background", color);
});
