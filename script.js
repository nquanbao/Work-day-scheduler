// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var timecheck = $('.time-block');
var btnSaveEl = $('.saveBtn');
var discriptionEl = $('.description')

//update the date
var today = dayjs();
 $('#currentDay').text(today.format('dddd, MMMM D  hh:mm A'));

 // Funtion to check the status for each block time
var timeStatus = function(e) {
  for (var i = 0; i <timecheck.length; i++){
    if(timecheck[i].dataset.time == dayjs().get('hour')){
      timecheck[i].classList.remove('past');
      timecheck[i].classList.remove('future');
      timecheck[i].classList.add('present');
    } else if(timecheck[i].dataset.time < dayjs().get('hour')) {
      timecheck[i].classList.remove('present');
      timecheck[i].classList.remove('future');
      timecheck[i].classList.add('past');
    } else {
      timecheck[i].classList.remove('past');
      timecheck[i].classList.remove('present');
      timecheck[i].classList.add('future');
    }
   

  }
  // console.log(dayjs().get('hour'))
}

//Funtion to save the discription into the localstorage
function localSaveEl (blocktime) {
  var saveLocal = JSON.parse(localStorage.getItem("blockEvent")) || []
  var inputValue = discriptionEl.val();
  saveLocal.push(inputValue)
  localStorage.setItem('blockEvent', JSON.stringify(saveLocal))
}
timeStatus()

console.log(discriptionEl.val())
btnSaveEl.on('click',function(e){
  e.preventDefault()
  localSaveEl();
  
})

console.log(localStorage.getItem('blockEvent'))