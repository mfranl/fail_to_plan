$(".saveBtn").on("click", function() {
    var time = $(this).attr("id").split("-")[0]
    var userEntry = $("#" + time + "-text").val()
    console.log(time,userEntry)
    localStorage.setItem(time, userEntry)
})