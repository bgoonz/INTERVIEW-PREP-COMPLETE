function DOMReady() {
  console.log("DOM loaded");
}

DOMReady();

function SetWindowLocationTo(newLocation) {
  window.location.href = newLocation;
}

let navBar = document.getElementById("js-nav-bar");
let overlapBackground = document.getElementById("js-overlap-background");
let overlapHide = document.getElementById("js-overlap-hide");
let hamburger = document.getElementById("js-nav-hamburger");

function ToggleNavBar() {
  navBar.classList.toggle("nav-bar-active");
  navBar.classList.toggle("nav-bar-inactive");

  overlapBackground.classList.toggle("half-opaque-background");
  overlapBackground.classList.toggle("transparent-background");

  overlapHide.classList.toggle("hidden");

  hamburger.classList.toggle("close");

  // Disable scrolling when nav bar is open
  document.querySelector("body").style.overflowY = hamburger.classList.contains(
    "close"
  )
    ? "hidden"
    : "visible";
}

function ToggleDropdown(dropdownElement) {
  let dropdownContent = dropdownElement.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("hidden");

  let isHidden = dropdownContent.classList.contains("hidden");

  dropdownElement
    .querySelector(".dropdown-arrow path")
    .setAttribute("transform", `rotate(${isHidden ? 0 : 180}, 5, 5)`);
}
