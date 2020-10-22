
//This is to define the whole broad function//
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//this tells program to respond to which button is being clicked//
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function() {
      var buttonInnerHTML = this.innerHTML;
      makesound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }
  )
}
  //this tells program to respond to w/e key is pressed//
  document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
  }
)
function makesound(key) {
  switch (key) {
    case "w":
      var snare1 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/snare.mp3");
      snare1.play();
      break;

    case "a":
      var tom1 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var kickBass = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "l":
      var crash1 = new Audio("/Users/abruce3411/Desktop/Web Development/Drum Kit Starting Files/sounds/crash.mp3");
      crash1.play();

    default:

  }

}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100)


}
