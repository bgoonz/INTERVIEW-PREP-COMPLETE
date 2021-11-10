/*
 * Very quick, very rough recreation of the JamHot 'Uncover Edinburgh' effect
 * https://www.thisisjamhot.com/work/uncover-edinburgh
 */

let wrappers, tl;

let config = {
  isDebug: false,
  speed: 10,
};

const gui = new dat.GUI();
const speedControl = gui.add(config, "speed", 0.1, 15);
const debugControl = gui.add(config, "isDebug");
gui.add(config, "credits");
speedControl.onChange(function (value) {
  anim(wrappers);
});

debugControl.onChange(function (value) {
  document.body.classList.toggle("debug");
});

function init() {
  const split = Splitting({
    target: ".featured-text",
    by: "chars",
  });

  split.forEach((splitInstance) => {
    wrappers = duplicateChars(splitInstance.chars);
    anim(wrappers);
  });
}

function randRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function duplicateChars(chars) {
  let wrappers = [];
  chars.forEach((el) => {
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "char-wrapper");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);

    let clone = el.cloneNode(true);
    clone.setAttribute("class", "char char--clone");
    wrapper.appendChild(clone);
    wrappers.push(wrapper);
  });

  return wrappers;
}

function anim(letters) {
  if (tl) {
    tl.kill();
  }
  tl = new TimelineMax({
    paused: true,
    onComplete: anim,
    onCompleteParams: [letters],
  });

  letters.forEach((letter, index) => {
    const gotoY = `-${randRange(0, 5) * 2}0vw`;
    const speed = config.speed + Math.random();
    tl.to(
      letter,
      speed,
      {
        y: gotoY,
        ease: "power1.inOut",
        onComplete: () => {
          TweenMax.to(letter, 0, { y: "0" });
        },
      },
      0
    );
  });

  tl.play();
}

init();
