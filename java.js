const container = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.width = heart.style.height = Math.random() * 12 + 10 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.transform = `rotate(45deg) scale(${Math.random() * 1.2 + 0.8})`;

  const colors = ["#ff4d6d", "#ff99c8", "#ff85a1", "#f48fb1", "#ce93d8", "#ffb3e6"];
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];
  heart.style.filter = `drop-shadow(0 0 ${Math.random() * 6 + 4}px ${heart.style.background})`;
  heart.style.opacity = Math.random() * 0.5 + 0.5;

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 350);
