//detect by mouse
for (var i = 0; i <document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonclick = this.innerHTML;
    makesound(buttonclick);
    Buttonanimation(buttonclick);

  });
}
//detect by keypress
document.addEventListener("keypress",function(event){
  makesound(event.key);
  Buttonanimation(event.key);

});
//play audio
function makesound(key){

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:


  }
}

function Buttonanimation(currentkey){
  var activebutt =  document.querySelector("."+currentkey);
  activebutt.classList.add("pressed");
  setTimeout(function(){
      activebutt.classList.remove("pressed");
  }
,100);
}
