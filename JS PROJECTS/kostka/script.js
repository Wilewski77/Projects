const dice = document.querySelector(".dice");
const imgs = [
	"./one.png",
	"./two.png",
	"./three.png",
	"./four.png",
	"./five.png",
	"./six.png",
];
const button = document.querySelector("button");
button.addEventListener("mouseover", (event) => {
	const x = event.pageX - button.offsetLeft;
	const y = event.pageY - button.offsetTop;

	button.style.setProperty("--xPos", x + "px");
	button.style.setProperty("--yPos", y + "px");
});

button.addEventListener("click", () => {
	let i = Math.floor(Math.random() * imgs.length);
	dice.style.rotate = "360deg";
	dice.style.opacity = 0.8;
	setTimeout(() => {
		dice.style.rotate = "0deg";
		dice.src = imgs[i];
		dice.style.opacity = 1;
		dice.style.transition = "0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
	}, 200);
});
