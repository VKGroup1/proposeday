document.querySelector(".proposal-btn").addEventListener("click", function() {
    document.querySelector(".hidden-message").style.display = "block";
    this.style.display = "none"; // Hide button after clicking
});

const music = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");

toggleButton.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        toggleButton.textContent = "Pause Music";
    } else {
        music.pause();
        toggleButton.textContent = "Play Music";
    }
});
