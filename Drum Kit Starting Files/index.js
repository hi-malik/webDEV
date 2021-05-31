//create eventListner

// Detecting Mouse click Press

var numberOfDrums = document.querySelectorAll(".drum").length; //"." represent class
for(var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); // eventListner helps to get in listen what to click
  function handleClick(){
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);                 // Create animation
      // switch (buttonInnerHtml) {
      //   case "w":
      //     var audio = new Audio("sounds/crash.mp3"); // var audio = new Audio("file.mp3"); helps to genearte file in the website
      //     audio.play();                              // audio.play = call the function to play
      //     break;
      //   case "a":
      //     var audio = new Audio("sounds/kick-bass.mp3");
      //     audio.play();
      //     break;
      //   case "s":
      //     var audio = new Audio("sounds/snare.mp3");
      //     audio.play();
      //     break;
      //   case "d":
      //     var audio = new Audio("sounds/tom-1.mp3");
      //     audio.play();
      //     break;
      //   case "j":
      //     var audio = new Audio("sounds/tom-2.mp3");
      //     audio.play();
      //     break;
      //   case "k":
      //     var audio = new Audio("sounds/tom-3.mp3");
      //     audio.play();
      //     break;
      //   case "l":
      //     var audio = new Audio("sounds/tom-4.mp3");
      //     audio.play();
      //     break;
      //   default:
      //     console.log("Wrong Button pressed");
      //
      // }
  }
}

// this is just to understand how to press key from keyboard
// document.addEventListener("keypress", key)
// function key(){
//   alert("Yoooooo");
// }

// Detecting Keyword Press

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);                 // Create animation
});

function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3"); // var audio = new Audio("file.mp3"); helps to genearte file in the website
      audio.play();                              // audio.play = call the function to play
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log("Wrong Button pressed");

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");        // show the animation of key pressed
  setTimeout(function(){
    activeButton.classList.remove("pressed");   // time out of the animation, to set back to normal after use
  }, 100);
}
