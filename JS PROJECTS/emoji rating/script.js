const stars = document.querySelectorAll(".stars i");
const emojis = document.querySelectorAll(".emojis i");
let fun = (item) => {
	item.addEventListener("click", () => {
		a = item.className[item.className.length - 1];
		if (item.className == `fa-solid fa-star star${a}`) {
			if (a >= 1) {
				for (let i = a; i <= 5; i++) {
					stars[i - 1].className = `fa-regular fa-star star${i}`;
					emojis[i - 1].style.opacity = 0;
				}
				item.className = `fa-solid fa-star star${a}`;
				emojis[a - 1].style.opacity = 1;
			}
		} else if (a > 1) {
			for (let i = a; i >= 1; i--) {
				stars[i - 1].className = `fa-solid fa-star star${i}`;
				emojis[i - 1].style.opacity = 0;
			}
			item.className = `fa-solid fa-star star${a}`;
			emojis[a - 1].style.opacity = 1;
		}
	});
};
stars.forEach(fun);