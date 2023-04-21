// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  var currentDayEl = $("#currentDay");
  currentDayEl.text(dayjs().format("dddd, MMMM D YYYY h:mm A"));

  var currentHour = dayjs().hour();
  var saveBtns = document.querySelectorAll(".saveBtn");
  var timeBlocks = document.querySelectorAll(".time-block");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var hour = this.parentNode.getAttribute("id");
      var description = this.parentNode.querySelector(".description").value;
      localStorage.setItem(hour, description);
    });
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  timeBlocks.forEach(function(block) {
    var hour = block.getAttribute("id").replace("hour-", "");
    var textArea = block.querySelector(".description");
    var textAreaValue = localStorage.getItem("hour-" + hour);
    textArea.value = textAreaValue;

    if (hour < currentHour) {
      block.classList.add("past");
      block.classList.remove("present", "future");
    } else if (hour == currentHour) {
      block.classList.add("present");
      block.classList.remove("past", "future");
    } else {
      block.classList.add("future");
      block.classList.remove("past", "present");
    }
  });
});
   
 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

   

    


  

  
  //
  // TODO: Add code to display the current date in the header of the page.
