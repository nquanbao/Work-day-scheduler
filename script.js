
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
//Loop to get value for each block-time from local storage 
for( var i = 0; i < timecheck.length; i++){
  var idTake = timecheck[i].getAttribute('id')
  var aaa = localStorage.getItem(idTake)
  timecheck[i].children[1].innerHTML = JSON.parse(localStorage.getItem(idTake))
}

//AddEventlistner for the button when clicked, creating the Key for local storage by id value
//in containing block-time and input the value
btnSaveEl.on("click", function(e){
  var idClick = this.parentNode;
  var idGetValue = idClick.getAttribute('id')
  var hhhhh = idClick.children[1].value
  localSaveEl(idGetValue,hhhhh)
})
