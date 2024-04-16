const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, computerPlay());
	});
});

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	const randomChoice = Math.floor(Math.random() * choices.length);
	return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
	let userScore = document.querySelector("#user-score");
	let computerScore = document.querySelector("#computer-score");
	let result = document.querySelector("#result");
	if (playerSelection === computerSelection) {
		result.textContent = `Remis!`;
		userScore.textContent = +userScore.textContent;
		computerScore.textContent = +computerScore.textContent;
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection == "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		result.textContent = `Wygrałeś!`;
		userScore.textContent = +userScore.textContent + 1;
	} else {
		result.textContent = `Przegrałeś...`;
		computerScore.textContent = +computerScore.textContent + 1;
	}
}
