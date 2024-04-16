const url = "https://api.capy.lol/v1/capybara?json=true";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");
randomCapybaraPhoto = (json) => {
	if (json && json["data"] && json["data"]["url"]) {
		let photo = json["data"]["url"];
		section.classList.add("capybaras");
		let image = document.createElement("img");
		image.src = photo;
		image.classList.add("random-capybaras");
		image.alt = photo;
		image.style.rotate = "180deg";
		section.appendChild(image);
		setTimeout(() => {
			image.style.rotate = "360deg";
		}, 300);
	} else {
		section.innerHTML = "Nie znaleziono kapibary";
	}
};

async function getRandomCapybara() {
	section.innerHTML = "";
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log("JSON:", json);
		return randomCapybaraPhoto(json);
	} catch (e) {
		console.log("error");
		console.log(e);
	}
}
button.addEventListener("click", getRandomCapybara);
