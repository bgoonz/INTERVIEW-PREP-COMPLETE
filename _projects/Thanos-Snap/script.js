disintegrate.init();

document.getElementById("img").addEventListener("click", (e) => {
  const disObj = disintegrate.getDisObj(e.target);
  disintegrate.createSimultaneousParticles(disObj);
  e.target.remove();
});

const thanosSnap = function () {
  this.name = "ThanosSnap";
  this.animationDuration = 1500;
  this.size = 3;
  this.speedX = Math.random();
  this.speedY = Math.random() * -1;
  this.first = true;
  this.draw = (ctx, percentComplete) => {
    if (this.first) {
      this.startX += (Math.random() - 0.5) * 10;
      this.startY += (Math.random() - 0.5) * 10;
      this.first = false;
    }
    ctx.beginPath();
    ctx.fillRect(
      this.startX - this.size / 2,
      this.startY - this.size / 2,
      this.size,
      this.size
    );
    const r = this.rgbArray[0];
    const g = this.rgbArray[1];
    const b = this.rgbArray[2];
    const a = 1 - percentComplete;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fill();
    this.speedX *= 1.07;
    this.speedY *= 1.07;
    this.size *= 0.95;
    this.startX += this.speedX;
    this.startY += this.speedY;
  };
};

disintegrate.addParticleType(thanosSnap);
