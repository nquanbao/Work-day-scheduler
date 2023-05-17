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

var currentTime = $('#currentDay')
var timecheck = $('.time-block');
var btnSaveEl = $('.saveBtn');
var discriptionEl = $('.description')


//update the date
function DateAndTime(){
  var current = dayjs().format('DD, MMM YYYY hh:mm:ss A')
  currentTime.text(current)
}
DateAndTime();
setInterval(DateAndTime,1000)

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
}

timeStatus()

//Funtion to save the discription into the localstorage
function localSaveEl (blocktimeEvent, valueDescripton) {
    var saveLocal = JSON.parse(localStorage.getItem("blockEvent")) || []
    var inputValue = valueDescripton;
    saveLocal.push(inputValue)
    localStorage.setItem(blocktimeEvent, JSON.stringify(saveLocal))
}

for( var i = 0; i < timecheck.length; i++){
  var idTake = timecheck[i].getAttribute('id')
  var aaa = localStorage.getItem(idTake)
  // console.log(aaa)
  timecheck[i].children[1].innerHTML = JSON.parse(localStorage.getItem(idTake))
  // var valShow = idTake.children[1]
  // var aaaa = valShow.value
  // console.log(aaaa)
  // valShow.innerHTML = localStorage.getItem(idTake)
}


btnSaveEl.on("click", function(e){
  
  // var saveLocal = JSON.parse(localStorage.getItem("blockEvent")) || []
  var idClick = this.parentNode;
  // console.log(idClick)
  var idGetValue = idClick.getAttribute('id')
  var hhhhh = idClick.children[1].value
  // console.log(idGetValue)
  // console.log(hhhhh)
  // // console.log(idGetValue)
  // // console.log(kkk)
  // localSaveEl(idGetValue,hhhhh)
  // saveLocal.push(hhhhh)
  // localStorage.setItem(idGetValue, JSON.stringify(saveLocal))
  localSaveEl(idGetValue,hhhhh)
})
