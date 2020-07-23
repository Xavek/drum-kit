for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    createSound(buttonInnerHTML);
    animationButton(buttonInnerHTML);
  });
}

document.addEventListener("keypress", (event) => {
  createSound(event.key);
  animationButton(event.key);
});

function createSound(key) {
  switch (key) {
    case "w":
      let audio = new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      let bass = new Audio("/sounds/kick-bass.mp3");
      bass.play();
      break;
    case "s":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      let tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
  }
}

function animationButton(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
