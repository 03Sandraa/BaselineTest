var originalBG = $("body").css("background-color");

$('body').mousemove(function(e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    var lightColor = "rgba(0, 234, 255, 0.7)";
    
    xy = x + "  " + y;
    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 30, from(rgba(0, 234, 255, 0.7)), to(transparent)), " + originalBG;
    bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " 20% " + "25" + "px)";

    $(this)
        .css({background: bgWebKit})
        .css({background: bgMoz});
    }).mouseleave(function() {
    $(this).css({
        background: originalBG
    });
});