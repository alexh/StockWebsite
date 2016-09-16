//BEGIN COUNTER FOR SUMMARY BOX
var s = serverCount;
var a = appCount;
var au = autoCount;
counterNum($(".profit h4 span:first-child"), 189, 200, 1, 30);
counterNum($(".deploy h4 span:first-child"), au - 100, au, 1, 30);
counterNum($(".server h4 span:first-child"), s - 200, s, 1, 30);
counterNum($(".app h4 span:first-child"), a - 200, a, 1, 30);
function counterNum(obj, start, end, step, duration) {
    $(obj).html(start);
    setInterval(function () {
        var val = Number($(obj).html());
        if (val < end) {
            $(obj).html(val + step);
        } else {
            clearInterval();
        }
    }, duration);
}
//END COUNTER FOR SUMMARY BOX