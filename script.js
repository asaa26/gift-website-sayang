const screens = {
  lock: document.getElementById("lockScreen"),
  surprise: document.getElementById("surpriseScreen"),
  birthday: document.getElementById("birthdayScreen"),
  photo: document.getElementById("photoScreen"),
  video: document.getElementById("videoScreen")
};

const bgMusic = document.getElementById("bgMusic");
const video = document.getElementById("memoryVideo");
const statusText = document.getElementById("videoStatus");

function showScreen(next) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  next.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startMusic() {
  if (!bgMusic || !bgMusic.querySelector("source")?.getAttribute("src")) return;
  bgMusic.volume = 0.42;
  bgMusic.play().catch(() => {
    // Browser may still require another user gesture.
  });
}

function pauseMusic() {
  if (!bgMusic.paused) bgMusic.pause();
}

function createConfetti() {
  const layer = document.getElementById("confetti");
  layer.innerHTML = "";
  const pieces = 95;
  for (let i = 0; i < pieces; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.setProperty("--x", (Math.random() * 180 - 90) + "px");
    piece.style.animationDuration = (2.4 + Math.random() * 2.2) + "s";
    piece.style.animationDelay = (Math.random() * .45) + "s";
    piece.style.background = ["#6ca9cf", "#8fc6e4", "#f5c8d7", "#ffffff", "#b8a9e8"][Math.floor(Math.random() * 5)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
  }
  setTimeout(() => layer.innerHTML = "", 5200);
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
}
updateClock();
setInterval(updateClock, 1000);

document.getElementById("unlockBtn").addEventListener("click", () => {
  startMusic();
  showScreen(screens.surprise);
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  createConfetti();
  setTimeout(() => showScreen(screens.birthday), 900);
});

document.getElementById("photoBtn").addEventListener("click", () => {
  showScreen(screens.photo);
});

document.getElementById("videoBtn").addEventListener("click", async () => {
  showScreen(screens.video);
  pauseMusic();
  video.currentTime = 0;
  try {
    await video.play();
    statusText.textContent = "Musik website sedang berhenti. Sekarang audio dari video yang terdengar. 🎥";
  } catch {
    statusText.textContent = "Tekan tombol play pada video jika browser meminta izin pemutaran.";
  }
});

video.addEventListener("play", () => {
  pauseMusic();
  statusText.textContent = "Musik website berhenti selama video diputar. 🎥";
});

video.addEventListener("pause", () => {
  if (!video.ended) statusText.textContent = "Video dijeda.";
});

video.addEventListener("ended", () => {
  startMusic();
  statusText.textContent = "Videonya selesai. Musik website dilanjutkan lagi. 💙";
});

document.getElementById("restartBtn").addEventListener("click", () => {
  video.currentTime = 0;
  pauseMusic();
  video.play().catch(() => {});
});

// Jika file musik belum tersedia, jangan membuat error mengganggu halaman.
bgMusic.addEventListener("error", () => {
  console.info("Tambahkan assets/shape-of-my-heart.mp3 untuk mengaktifkan backsound.");
});
