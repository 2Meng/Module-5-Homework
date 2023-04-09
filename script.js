// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



if(localStorage.getItem('dayItem')){
  scheduleItems = JSON.parse(localStorage.getItem('dayItem')) 
};

var scheduleItems = [];

$(function () {
  //clock
  setInterval(function(){
    $('#clock').text(dayjs().format('MMM D, YYYY [at] hh:mm:ss A'))
  }, 1000);

  //event listener to save schedule item
  $('.btn').click(function(){
      

  });
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //apply 'past'-'present'-'future' class to schedule time slot if 'todays' hour equals if statement
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
