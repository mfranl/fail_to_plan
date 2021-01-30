//todays date/time
var todayDate = moment().format('ddd, MMM, Do YYYY');
$("#currentDay").html(todayDate);








$(".saveBtn").on("click", function() {
    var time = $(this).attr("id").split("-")[0]
    var userEntry = $("#" + time + "-text").val()
    console.log(time,userEntry)
    localStorage.setItem(time, userEntry)
})

var hours = moment().hours()
console.log(hours)

for (var i = 9; i <= 16; i++) {
    $("#" + i + "-text").val(localStorage.getItem(i))
    if (i < hours) {
        $("#" + i + "-text").addClass("past")
    } else if (i === hours) {
        $("#" + i + "-text").addClass("present")
    } else {
        $("#" + i + "-text").addClass("future")
    }

}