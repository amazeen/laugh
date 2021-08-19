var numOfButtons = document.querySelectorAll(".laugh").length;
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".laugh")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "one":
        var niece = new Audio("sounds/Katelyn.mp3");
        niece.play();
        break;
      case "two":
        var nephew2 = new Audio("sounds/Timothy.mp3");
        nephew2.play();
        break;
      case "three":
        var nephew1 = new Audio("sounds/Matthew.mp3");
        nephew1.play();
        break;
      case "four":
        var jan1 = new Audio("sounds/Janicelaugh.mp3");
        jan1.play();
        break;
      case "five":
        var friend = new Audio("sounds/Estherlaugh.mp3");
        friend.play();
        break;
      case "six":
        var jan2 = new Audio("sounds/JLlaugh2.mp3");
        jan2.play();
        break;

      default: console.log(buttonInnerHTML);

    }
  });
}


var audio = new Audio("sounds/tom-1.mp3");
audio.play();
