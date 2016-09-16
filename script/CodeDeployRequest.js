$(document).ready(function () {
    CreateDatePicker();
    $('#DeployDateTimeNotNull').val("Pick Date");


    //Needed for case where Testable is true but QA fields have not been entered
    var expanded = $('#TestableInQABool').is(':checked');
    if (!expanded) {
        var $section = $('#QAsection');
        $section.show(500);

    }
});

function CreateDatePicker() {
    var env = $('#Environment').val();
    var dates = "";
    var highlight = "";
    if (env == "Production") {
        dates = "0,5,6";
        highlight = "1,2,3,4";
    } else {
        dates = "0,6";
        highlight = "1,2,3,4,5";
    }
    $('.datepicker').datepicker({

        daysOfWeekDisabled: dates,
        daysOfWeekHighlighted: highlight,
        startDate: new Date(),
        autoclose: true,
        useCurrent: true,


    }).on('changeDate', function (e) {
        DateChange();

    });
}

function EnvUpdate() {
    $('.datepicker').datepicker('remove');
    CreateDatePicker();
}

function DateChange() {
    var day = new Date($('#DeployDateTimeNotNull').val());
    var date = day;
    day = day.getDay();
    if (day == 1 || day == 3 || day == 4 || day == 5) {
        var times = [];
        if (new Date().getDate() == date.getDate() && new Date().getMonth() == date.getMonth()) {
            if (new Date().getTime() < new Date("October 13, 2014 9:00:00").getTime()) {

                times.push("9:00 AM");
            }
            if (new Date().getTime() < new Date("October 13, 2014 14:00:00").getTime()) {
                times.push("2:00 PM");
            }

            if (times.length == 0) {
                times.push("No time slots available");
            }
        } else {
            times = ["9:00 AM", "2:00 PM", ];
        }
        $("#DeployTime").html("")
        $.each(times, function (i, time) {
            $("#DeployTime").append(
            $('<option></option').val(time).html(time));
        });
    } else {

        var times = [];
        if (new Date().getDate == date.getDate() && new Date().getMonth() == date.getMonth()) {
            if (new Date().getTime() < new Date("October 13, 2014 9:00:00").getTime()) {
                times.push("9:00 AM");
            }
            if (new Date().getTime() < new Date("October 13, 2014 14:00:00").getTime()) {
                times.push("2:00 PM");
            }
            if (new Date().getTime() < new Date("October 13, 2014 21:00:00").getTime()) {
                times.push("9:00 PM");
            }

            if (times.length == 0) {
                times.push("No time slots available");
            }

        } else {
            times = ["9:00 AM", "2:00 PM", "9:00 PM"];
        }


        $("#DeployTime").html("")
        $.each(times, function (i, time) {
            $("#DeployTime").append(
            $('<option></option').val(time).html(time));
        });
    }
}

function FillDropDowns() {
    var teamId = $('#Team').val();
    var userId = $('#User').val();

    $.ajax({
        url: '/Teams/GetValidEnvironments',
        type: "GET",
        dataType: "JSON",
        data: { Team: teamId, User: userId },
        success: function (envs) {
            $("#Environment").html("")
            $.each(envs, function (i, env) {
                $("#Environment").append(
                $('<option></option').val(env.EnvName).html(env.EnvName));
            });

        }

    })

    $.ajax({
        url: '/Applications/FillApps',
        type: "GET",
        dataType: "JSON",
        data: { Team: teamId },
        success: function (apps) {
            $("#AppName").html(""); //clear old items
            $.each(apps, function (i, app) {
                $("#AppName").append(
                $('<option></option>').val(app.AppName).html(app.AppName));
            });
        }
    });

    $.ajax({
        url: '/Teams/GetEmail',
        type: "GET",
        dataType: "JSON",
        data: { Team: teamId },
        success: function (email) {
            $('#ConfirmationEmail').val(email);
        }

    })


}

function QaYesCode() {
    var $section = $('#QAsection');
    $section.hide(500);

}

function QaNoCode() {
    var $section = $('#QAsection');
    $section.show(500);

}
//function QACheck() {
//    var isChecked = $('#TestableInQA').val();
//    if (isChecked) {
//        //Checked
//        //Display QA Section
//    } else {
//        //Undisplay
//    }
//}

//function QACheck() {
//    var $section = $('#QAsection');
//    var $check = $('#TestableInQABool');
//    var height = $section.height();
//    var expanded = $('#TestableInQABool').is(':checked');
//    if (expanded) {
//        $section.show(500);

//    } else {
//        $section.hide(500);
//    }
//    //if (expanded) {
//    //    height -= 500;
//    //}
//    //else {
//    //    height += 500;
//    //}
//    //$section.data('expanded', !expanded);
//    //$section.animate({
//    //    height: height
//    //}, 1000);
//};