// variables //
var loc


// functions //
function waldoLocation() {
  var locationId = Math.floor(Math.random() * 3) + 1;
  switch (locationId) {
    case 1:
      console.log("house");
      return "house";
      break;
    case 2:
      console.log("tree");
      return "tree";
      break;
    case 3:
      console.log("fish");
      return "fish";
      break;
  }
}

function guessingGame(answer) {
  var guess;

  while (guess !== answer) {
    guess = prompt("Where is Waldo Hiding?", "house/tree/fish");
    if (answer === guess) {
      alert("You found him!");
      winSelect(guess);
    } else {
      alert("I'm sorry, guess again");
      crossOut(guess);
    }
  }
}

function crossOut(hidingSpace) {
  document.getElementById(hidingSpace).style.color = "red";
}

function winSelect(hidingSpace) {
  document.getElementById(hidingSpace).style.color = "blue";
  document.getElementById(hidingSpace).style.border = "solid";
}


// Script Start //
loc = waldoLocation();
guessingGame(loc);


