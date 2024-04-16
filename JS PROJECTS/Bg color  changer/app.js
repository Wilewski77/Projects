const btn = document.querySelector(".btn");
let hex = document.querySelector("#hex").value;
const changeColor = () => {
	hex = document.querySelector("#hex").value;
	let color = "#" + hex;
	console.log(color);
	document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeColor);

