// --- 1. COUNTDOWN TIMER ---
// EDIT: Set your target event date and time here (YYYY-MM-DDTHH:MM:SS)
const TARGET_DATE = new Date("2026-04-26T19:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (difference <= 0) {
    if (daysEl) daysEl.innerText = "00";
    if (hoursEl) hoursEl.innerText = "00";
    if (minutesEl) minutesEl.innerText = "00";
    if (secondsEl) secondsEl.innerText = "00";
    return;
  }

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((difference % (1000 * 60)) / 1000);

  if (daysEl) daysEl.innerText = String(d).padStart(2, '0');
  if (hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
  if (minutesEl) minutesEl.innerText = String(m).padStart(2, '0');
  if (secondsEl) secondsEl.innerText = String(s).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


// --- 2. AUDIO & TAP-TO-BEGIN OVERLAY ---
const audio = document.getElementById("bg-audio");
const overlay = document.getElementById("start-overlay");
const soundToggle = document.getElementById("soundToggle");

function startExperience() {
  if (audio) {
    audio.play().then(() => {
      if (soundToggle) soundToggle.classList.add("playing");
    }).catch(err => {
      console.warn("Autoplay restriction prevented playback:", err);
    });
  }
  if (overlay) {
    overlay.classList.add("hidden");
  }
}

if (overlay) {
  overlay.addEventListener("click", startExperience);
}

if (soundToggle && audio) {
  soundToggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      soundToggle.classList.add("playing");
    } else {
      audio.pause();
      soundToggle.classList.remove("playing");
    }
  });
}