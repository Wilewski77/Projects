let num1El = document.querySelector(".num1");
let num2El = document.querySelector(".num2");
let input = document.querySelector("input");
let score = document.querySelector(".score");
const btn = document.querySelector("button");
const loadNumbers = () => {
	num1El.textContent = Math.floor(Math.random() * 10 + 1);
	num2El.textContent = Math.floor(Math.random() * 10 + 1);
};
loadNumbers();

btn.addEventListener("click", () => {
	if (input.value == num1El.textContent * num2El.textContent) {
		score.textContent++;

		loadNumbers();
		input.value = null;
	} else {
		score.textContent--;
		loadNumbers();
		input.value = null;
	}
	if (score.textContent > 0) {
		score.style.color = "#0f0";
	} else if (score.textContent < 0) {
		score.style.color = "#f00";
	} else {
		score.style.color = "#000";
	}
});
