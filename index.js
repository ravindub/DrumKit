var noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleClick() {
      playSound(this.innerHTML);
      btnAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  btnAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickBase = new Audio("sounds/kick-bass.mp3");
      kickBase.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(this.innerHTML);
      break;
  }
}

function btnAnimation(key) {
  var selectedBtn = document.querySelector("." + key);

  selectedBtn.classList.add("pressed");

  setTimeout(function () {
    selectedBtn.classList.remove("pressed");
  }, 100);
}
