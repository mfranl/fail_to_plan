//todays date/time
var todayDate = moment().format('ddd, MMM, Do YYYY');
$("#currentDay").html(todayDate);

//save button event listener
$(".saveBtn").on("click", function() {
    var time = $(this).attr("id").split("-")[0]
    var userEntry = $("#" + time + "-text").val()
    //console.log(time,userEntry)
    //saves to local storage 
    localStorage.setItem(time, userEntry)
})

//todays real time
var hours = moment().hours()
//console.log(hours)

//sets the correct background styling depending on time
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