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
  fuckidman();

  var yourcomputerisupdatingpleasedonotturnoffyourdevice = window.setInterval(function() {
    currenttime();
  }, 1000);
});

function fuckidman() {
  if (navigator.language && navigator.language.toLowerCase() === "id") {
    var elementToHide = document.getElementById("ihi");
    if (elementToHide) elementToHide.style.display = "none";

    var elementToChange = document.getElementById("yo");
    if (elementToChange) elementToChange.innerHTML = '<h2>A <span>15 Year old</span> student from Indonesia</h2>';
  }

}

function trpop() {
  document.getElementById("trpopup").style.display = "block";
}

function trnop() {
  document.getElementById("trpopup").style.display = "none";
}

var ct = document.getElementById("theme");

function back() {
  ct.getAttribute("href") !== "index.css";
  ct.setAttribute("href", "index.css");
}

function dev() {
  ct.getAttribute("href") !== "/theme/dev.css";
  ct.setAttribute("href", "/theme/dev.css");
  fuckidman();
}

function tra() {
  ct.getAttribute("href") !== "/theme/translator.css";
  ct.setAttribute("href", "/theme/translator.css");
}

function ga() {
  ct.getAttribute("href") !== "/theme/gaming.css";
  ct.setAttribute("href", "/theme/gaming.css");
}

function ms() {
  if (localStorage.getItem('kaboom') === 'insanity') {
    insanity();
  } else {
    ct.getAttribute("href") !== "/theme/mis.css";
    ct.setAttribute("href", "/theme/mis.css");
    localStorage.setItem('kaboom', 'mis');
  }
}

function insanity() {
  ct.getAttribute("href") !== "/theme/misc.css";
  ct.setAttribute("href", "/theme/misc.css");
  localStorage.setItem('kaboom', 'insanity');
}