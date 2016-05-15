
$(function () {

    var count = $("#slider > img").length
    var slider = 1
    var speed = 6000
    var fadeSpeed = 500
    var loop

    start()

    $("#1").fadeIn(fadeSpeed);
    $("#1a").addClass("selected");
    $('.right').click(right);
    $('.left').click(left);
    $('#slider').hover(stop, start);

    function start() {
        loop = setInterval(next, speed)
    }

    function stop() {
        clearInterval(loop)
    }

    function right() {
        stop()
        next()
        start()
        return false
    }

    function left() {
        stop()
        prev()
        start()
        return false
    }

    function prev() {
        $("#" + slider + "a").removeClass("selected")
        slider--
        if (slider < 1) {
            slider = count
        }

        $("#slider > img").fadeOut(fadeSpeed)

        $("#" + slider).fadeIn(fadeSpeed)
        $("#" + slider + "a").addClass("selected")
    }

    function next() {
        $("#" + slider + "a").removeClass("selected")
        slider++
        if (slider > count) {
            slider = 1
        }

        $("#slider > img").fadeOut(fadeSpeed)
        $("#" + slider).fadeIn(fadeSpeed)
        $("#" + slider + "a").addClass("selected")
    }


});