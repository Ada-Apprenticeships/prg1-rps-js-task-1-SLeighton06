function rockPaperScissors(player1, player2) {
  const WinningChoice = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  }

  if (player1 === player2) {
    return "draw";
  } else if (WinningChoice[player1].includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}