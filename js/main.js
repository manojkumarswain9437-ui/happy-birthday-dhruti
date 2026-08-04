const btn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// Create floating hearts
for (let i = 0; i < 35; i++) {

    let heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 16) + "px";
heart.style.opacity = "0.7";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(heart);
}

// Start button
btn.addEventListener("click", () => {

    music.volume = 0.5;

    music.play().catch(() => {});

    btn.innerHTML = "💝 Preparing Surprise...";

    setTimeout(() => {

        window.location.href = "loading.html";

    }, 2000);

});