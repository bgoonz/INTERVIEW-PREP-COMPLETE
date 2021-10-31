window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const keys = document.querySelectorAll(".keys div");
  const meowBalls = document.querySelector(".meow-balls");

  keys.forEach((key, index) => {
    const color = window
      .getComputedStyle(key)
      .getPropertyValue("background-color");
    key.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBalls(color);
    });
  });

  const createBalls = (color) => {
    const ball = document.createElement("div");
    meowBalls.appendChild(ball);
    ball.style.backgroundColor = color;
    ball.style.animation = `jump 1s ease-out`;
    ball.addEventListener("animationend", function () {
      meowBalls.removeChild(this);
    });
  };
});
