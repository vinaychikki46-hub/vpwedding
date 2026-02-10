function enterSite() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("music").play();
}

// Countdown
var weddingDate = new Date("Dec 12, 2026 07:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = weddingDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML =
    days + " days to go!";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We are Married!";
  }
}, 1000);
