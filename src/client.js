var emoji = require('./allEmoji');

function test() {
  alert("Test!");
}

var submitButton = document.getElementById('submit-button');
if (submitButton) {
  submitButton.addEventListener('click', function() {
      generateNew();
  }, false);
}

var hideButton = document.getElementById('hide-link');
if (hideButton) {
  hideButton.addEventListener('click', function() {
    document.getElementById("to-form").style.display = "none";
  }, false);
}

function moreEmojis(){
  var yMaxBody = document.documentElement.clientHeight + 700;
  var xMaxBody = document.documentElement.clientWidth + 100;
  var yMaxWindow = window.innerHeight; + 100;
  var xMaxWindow = window.innerWidth; + 100;
  
  var xMax = xMaxBody > xMaxWindow ? xMaxBody : xMaxWindow;
  var yMax = yMaxBody > yMaxWindow ? yMaxBody : yMaxWindow;
  console.log("BODY: " + yMaxBody + "   ___ WINDOW: " + yMaxWindow);
  document.getElementById("container").style.width = xMax;
  document.getElementById("container").style.height = yMax;
  
  var x = Math.floor(Math.random() * xMax) - 50;
  var y = Math.floor(Math.random() * yMax) - 50;
  var size = Math.floor(Math.random() * 400) + 100;
  if (!selectedEmoji) {
    selectedEmoji = emoji;
  }
  var em = selectedEmoji[Math.floor(Math.random() * (selectedEmoji.length))];
  var e = document.createElement("div");
  e.className = "emoji";
  e.setAttribute("style", "top: " + y + "px; left: " + x + "px; font-size: " + size + "%;");
  e.textContent = em
  document.body.appendChild(e);
}

function generateNew() {
  var emojiInput = document.getElementById("emoji-input").value.split(/[\n\r\s]+/);
  var q = "?";
  var c = 0;
  for (var e in emojiInput) {
    q += (c++) + "=" + emoji.indexOf(emojiInput[e]) + "&";
  }
  q = q.slice(0, -1);
  window.location = "https://emojiwallpaper.glitch.me/" + q;
  
}

if (!blank) {
  window.setInterval(function () {
    moreEmojis()
  }, 5);
}


