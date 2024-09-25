function rockPaperScissors(player1, player2) {
  const winAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return player1 === player2 ? "draw" : winAgainst[player1].includes(player2) ? "player1" : "player2";
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
