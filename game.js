let score = 0;
const btn = document.getElementById("clickBtn");
const scoreDisplay = document.getElementById("score");

// When button is clicked
btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Move button to random position
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
});



