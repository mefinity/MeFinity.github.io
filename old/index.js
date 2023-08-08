document.addEventListener("DOMContentLoaded", function(event) {
function currenttime() {
const date = new Date();

const settime = document.getElementById("time");

settime.textContent = date.toLocaleString('en-US', {
  timeZone: 'Asia/Jakarta',
  hour12: false,
  hour: '2-digit',
  minute: '2-digit'
});
}

currenttime();

var timeupdate = window.setInterval(function() {
  currenttime();
}, 1000);
});
