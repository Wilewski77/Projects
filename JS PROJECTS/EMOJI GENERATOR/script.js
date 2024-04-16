const btnEl = document.querySelector("button");
const emojiNameEl = document.querySelector("p");
let emoji = [];
async function getEmoji() {
	let response = await fetch(
		"https://emoji-api.com/emojis?access_key=e6e28e9de73f7047d0fedb8272636328792bf4d4"
	);
	data = await response.json();
	for (let i = 0; i < 1500; i++) {
		emoji.push({
			emojiName: data[i].character,
			emojiCode: data[i].unicodeName,
		});
	}
}
getEmoji();
btnEl.addEventListener("click", () => {
	const randomNum = Math.floor(Math.random() * emoji.length);
	btnEl.innerText = emoji[randomNum].emojiName;
	emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
