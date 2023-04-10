 //clock
setInterval(function(){
  $('#clock').text(dayjs().format('MMM D, YYYY [at] h:mm A'))
}, 1000);

$(document).ready(function () {

  //event listener to save schedule item
  $(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
  })

  //apply 'past'-'present'-'future' class to schedule time slot if 'todays' hour equals if statement
  function timeTracker(){
    var currentHour = dayjs().hour();
  for(var i = 6; i <= 18; i++){
    var hourId = 'hour-' + (i);
    var hourElement = document.getElementById(hourId);
    
    if(hourElement){
      if (i === currentHour) {
        document.getElementById(hourId).classList.add('present')
      } 
      if (i < currentHour){
        document.getElementById(hourId).classList.add('past')
      }
      if(i > currentHour){
        document.getElementById(hourId).classList.add('future')
      }
    }
  }
  }

  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));

  timeTracker()
});
