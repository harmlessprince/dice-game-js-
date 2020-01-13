// console.log(Math.random());

//Rolling the dice
var scores, roundScore, activePlayer, gamePlaying;

resetGame();

document.querySelector("#new-game").addEventListener("click", resetGame);

document.querySelector("#roll-dice").addEventListener("click", function() {
  if (gamePlaying) {
    //generate dice score
    // var dice2 = 0;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    // dice2 = Math.floor(Math.random() * 6) +1 ;

    //change player current score
    document.querySelector("#current-" + activePlayer).textContent = dice1;

    //change dice imgae
    document.querySelector("#dice-image1").src = "dice-" + dice1 + ".png";
    // document.querySelector('#dice-image2').src = 'dice-'+ dice2 +'.png'

    document.querySelector("#dice-image1").style.display = "inline-block";

    if (dice1 !== 1) {
      roundScore = roundScore + dice1;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next Player
      nextPlayer();
    }
  } else {
    alert("Please click Click New Game button to start a new round!");
  }
});
var score = document.querySelector("#score-" + activePlayer).textContent;
// console.log(score);
document.querySelector("#hold-score").addEventListener("click", function() {
  // Add current score to global score
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Update current score for each player
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document.querySelector("#name-" + activePlayer).innerHTML =
      '<span >Winner &nbsp;&nbsp;&nbsp;<i class="fa fa-trophy"></i> </span>';

    document.querySelector("#dice-image1").style.display = "none";
    gamePlaying = false;
  } else {
    //Next player
    nextPlayer();
  }
  //   resetGame();
});
// resset game to default
function resetGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  //Hide dice uppon page load
  document.getElementById("dice-image1").style.display = "none";

  // default value of all game values

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").innerHTML =
    '<span >Player 1 &nbsp;&nbsp;&nbsp;<i class="fa fa-user"></i> </span>';
  document.getElementById("name-1").innerHTML =
    '<span >Player 2 &nbsp;&nbsp;&nbsp;<i class="fa fa-user"></i> </span>';
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  //Next Player
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  roundScore = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector("#dice-image1").style.display = "none";
}
