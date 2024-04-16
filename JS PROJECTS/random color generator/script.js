const box = document.querySelector(".box");
for (let i = 1; i <= 30; i++) {
	const div = document.createElement("div");
	box.appendChild(div);
}
const divs = document.querySelectorAll(".box div");
let a = (item) => {
	let str = "0123456789abcdef";
	let hex = "";
	item.style.opacity = 0;
	for (i = 0; i < 6; i++) {
		let random = Math.floor(Math.random() * (str.length - 1));
		hex += str[random];
	}
	item.style.background = `#${hex}`;
	item.textContent = `#${hex}`;
	setTimeout(() => {
		item.style.opacity = 1;
	}, 200);
};
divs.forEach(a);
