const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplay = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
document.getElementById("set-alarm-button").addEventListener("click", setAlarm)
let currentTime = null
let alarmTime = null
const audio = new Audio('bells.mp3');

function renderCurrentTime() {
    setInterval(() => {    
    currentTime = new Date().localeTimeString();
    currentTimeDisplay.textContent = currentTime;
}), 1000)

renderCurrentTime()

function setAlarm() {
    event.preventDefault()
   let wakeyHours = document.getElementById("hours-input").nodeValue
   let wakeyMins = document.getElementById("minutes-input").value
   
   let wakeyTime = `${wakeyHours}:${wakeyMins}:00`
   let alarmTime = new Date()
   alarmTime.sethours(wakeyHours)
   alarmTime.setMinutes(wakeyMins)
   console.log(alarmTime
   
}

function alarmChecker() {

}
alarmChecker()

function ringTheAlarm(){
   
}