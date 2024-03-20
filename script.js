
function updateCountdown() {
  const currentDate = new Date();
  const targetDate = new Date('2024-12-31T12:00:00');
  const difference = targetDate - currentDate;

  const Days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const Hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const Seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = Days;
  document.getElementById("hours").innerText = Hours;
  document.getElementById("minutes").innerText = Minutes;
  document.getElementById("seconds").innerText = Seconds;


  if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started";
  }
}

const interval = setInterval(updateCountdown, 1000);
