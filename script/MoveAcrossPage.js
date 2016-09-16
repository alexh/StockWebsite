


$(document).ready(function (e) {

    var width = $(document).width();

    function goRight() {
        $("#animate").animate({
            left: width
        }, 4000, function () {
            setTimeout(goLeft, 50);
        });
    }
    function goLeft() {
        $("#animate").animate({
            left: 0
        }, 4000, function () {
            setTimeout(goRight, 50);
        });
    }

    setTimeout(goRight, 50);
});