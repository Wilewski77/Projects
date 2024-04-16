const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const auto = document.querySelector(".auto");
let number = +document.querySelector(".number").textContent;
let progress = +document.querySelector(".progress-bar");
const getRandomHexColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
};
const getRandomTypeOfBorder = () => {
	const types = ["solid", "dashed" /*"dotted"*/, , "double"];
	const drawType = Math.floor(Math.random() * types.length);
	const randomType = types[drawType];
	return randomType;
};
const progressBar = () => {
	let progress = number;
	if (progress > 100 || progress < -100) {
		document.querySelector(".progress-bar").style.backgroundColor =
			getRandomHexColor();
		return;
	} else if (progress < 0) {
		document.querySelector(".progress-bar").style.width = -progress + "%";
		document.querySelector(".progress-bar").style.backgroundColor = "#f00";
	}
	if (
		document.querySelector(".progress-bar").style.backgroundColor == "#f00" &&
		progress > 0
	) {
		document.querySelector(".progress-bar").style.backgroundColor = "#0f0";
	}
	document.querySelector(".progress-bar").style.width = progress + "%";
	document.querySelector(
		".box"
	).style.border = `10px  ${getRandomTypeOfBorder()}
		${getRandomHexColor()}`;
};

const changeColor = () => {
	if (number > 0) {
		document.querySelector(".number").style.color = "green";
	} else if (number < 0) {
		document.querySelector(".number").style.color = "red";
	} else {
		document.querySelector(".number").style.color = "#000";
	}
};
const autoAdding = async () => {
	const isChecked = auto.checked;
	if (isChecked) {
		auto.disabled = "true";
		const interval = setInterval(() => {
			if (number === 100) {
				clearInterval(interval);
				auto.disabled = false;
				return;
			}

			number += 1;
			document.querySelector(".number").textContent = number;
			changeColor();
			progressBar();
		}, 100);
	} else {
		const interval = setInterval(() => {
			auto.disabled = "true";
			if (number === 0) {
				clearInterval(interval);
				auto.disabled = false;
				return;
			}

			number -= 1;
			document.querySelector(".number").textContent = number;
			changeColor();
			progressBar();
		}, 100);
	}
};

const subtraction = () => {
	number -= 1;
	document.querySelector(".number").textContent = number;
	changeColor();
	progressBar();
};
const add = () => {
	number += 1;
	document.querySelector(".number").textContent = number;
	changeColor();
	progressBar();
};
minus.addEventListener("click", subtraction);

plus.addEventListener("click", add);
auto.addEventListener("change", autoAdding);
changeColor();
