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

$("#saveBtn").on("click", function () {
  var text = $(this).sibling(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#8.description").val(localStorage.getItem("#8"));
