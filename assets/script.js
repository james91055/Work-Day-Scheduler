var currentDate = $("#currentDay");
// Track hours
var timeNow = moment().hour();

// Realtime update
setInterval(rightNow, 1000);
function rightNow() {
  var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  currentDate.text(now);
}

console.log($(".time-block"));
console.log(timeNow);

// Check Time blocks
$(".row").each(function () {
  var blockTime = parseInt($(this).attr("id"));
  // Define time block
  if (blockTime < timeNow) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

// Add event listener

$(".saveBtn").click(function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  console.log(time);
  console.log(text);
});

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
