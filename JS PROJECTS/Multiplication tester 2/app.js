const firstFactor = document.querySelector(".firstFactor");
const secondFactor = document.querySelector(".secondFactor");
const btn = document.querySelector(".btn");
let result;
let score = document.querySelector(".score");
let correctAns = document.querySelector(".correctAnswers").textContent;
let wrongAns = document.querySelector(".wrongAnswers").textContent;

const randomNumber = () => {
	return Math.floor(1 + Math.random() * 10);
};
const checkResult = () => {
	let historyItem = document.createElement("span");
	result = document.querySelector("#result").value;
	if (firstFactor.value * secondFactor.value == result) {
		correctAns++;
		document.querySelector(".correctAnswers").textContent = correctAns;
		historyItem.className = "correctResultsHistory";
		historyItem.textContent = `${firstFactor.value} * ${secondFactor.value} = ${result} `;
		document.querySelector(".correct").appendChild(historyItem);
	} else {
		wrongAns++;
		document.querySelector(".wrongAnswers").textContent = wrongAns;
		historyItem.className = "wrongResultsHistory";
		historyItem.textContent = `${firstFactor.value} * ${secondFactor.value} != ${result}`;
		document.querySelector(".wrong").appendChild(historyItem);
	}

	if (wrongAns === 0) {
		score.textContent = "100%";
	} else {
		score.textContent =
			(
				(correctAns / (parseInt(correctAns) + parseInt(wrongAns))) *
				100
			).toFixed(2) + "%";
	}
	scoreColorChanger();
	document.querySelector("#result").value = null;
	firstFactor.value = randomNumber();
	secondFactor.value = randomNumber();
};
const scoreColorChanger = () => {
	if (
		((correctAns / (parseInt(correctAns) + parseInt(wrongAns))) * 100).toFixed(
			2
		) >= "50.00"
	) {
		score.style.color = "green";
		console.log(
			(
				(correctAns / (parseInt(correctAns) + parseInt(wrongAns))) *
				100
			).toFixed(2)
		);
	} else {
		score.style.color = "red";
	}
};
firstFactor.value = randomNumber();
secondFactor.value = randomNumber();
btn.addEventListener("click", checkResult);
