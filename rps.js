function rockPaperScissors(player1Input, player2Input) {
  const winAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"],
  };

  return player1Input === player2Input ? "draw" : winAgainst[player1Input].includes(player2Input) ? "player1" : "player2";
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
