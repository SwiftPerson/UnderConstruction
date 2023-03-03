const countdown = document.querySelector(".countdown");
const launchDate = new Date("2023, 04, 01 00:00:00").getTime();

const interval = setInterval(() => {
  const timeRemaining = launchDate - new Date().getTime();
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  const totalSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;
  const progressBarFill = document.querySelector(".progress-bar-fill");
  const progressBar = document.querySelector(".progress-bar");
  const progressPercent = Math.round(
    ((launchDate - new Date().getTime()) / 1000 / totalSeconds) * 100
  );
  progressBarFill.style.width = `${progressPercent}%`;

  if (timeRemaining < 0) {
    clearInterval(interval);
    document.querySelector(".countdown-title").innerText = "We've launched!";
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    progressBarFill.style.width = "100%";
  }
}, 1000);
