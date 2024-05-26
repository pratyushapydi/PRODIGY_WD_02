let timer;
let running = false;
let time = 0;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(timer);
  running = false;
  time = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  time++;
  let hours = Math.floor(time / 360000);
  let minutes = Math.floor((time / 6000) % 60);
  let seconds = Math.floor((time / 100) % 60);
  let milliseconds = time % 100;

  document.getElementById("display").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function lap() {
  if (running) {
    let lapsList = document.getElementById("laps");
    let lapTime = document.createElement("li");
    lapTime.textContent = document.getElementById("display").textContent;
    lapsList.insertBefore(lapTime, lapsList.firstChild);
  }
}
