import { useState } from "react";
import "./styles.css";

const content = [
	[
		"Ma doświadczenie 17 lat!!",
		"Zdala wszystkie egzaminy",
		"Niedosc ze nauczyciel informatyki to jeszcze katecheta i przewodniczaca 3 rzeczy",
		"Przecietny użytkownik bigosu",
	],
	[
		"Ulubiony uczeń: Hubert Krawczyk",
		"Step-Bratanek: Szymon Malinowski",
		"Kto nie zda egzaminu: Fabian Bik",
		"Zainteresowania: Pierdolenie o tym ze zdala wszystko, Szymon Malinowski, Hubert Krawczyk, Bóg",
		"Wróg publiczny numer 1 : Małgorzata Fuck the Police",
		"Ulubi",
	],
	[
		"Tylko buk mosze nas sondzic",
		"Ciesz sie ze bozia rece dala",
		"Ale ja juz w ogole nie chce uczyc informatyki tylko religi ",
	],
	[
		"Tabin: Float gigachad enjoyer 🐐🐐🐐🐐🐐",
		"The Suspect: flex/grid small pp 💀💀🤓🦞🦀🦷 ",
		"Tabin: access loveer 🤯🤯💘💝💗 gigachad",
		"The Suspect: js 💀💀💀🤓🧯 enjoyer no sigma import random",
	],
];

export default function App() {
	const [activeContentIndex, setActiveContentIndex] = useState(0);

	return (
		<div>
			<header>
				<img
					src='jebackurwetabin.png'
					alt='Tabinka'
				/>
				<div>
					<h1>Elżbieta Tabin🐐</h1>
					<p>
						Mgr Informatyki OD 17 LAT!!!!, zdala wszystkie egzaminy, katecheta,
						wizjoner, atleta, klepie kotleta🐐
					</p>
				</div>
			</header>

			<div id='tabs'>
				<menu>
					<button
						className={activeContentIndex === 0 ? "active" : ""}
						onClick={() => setActiveContentIndex(0)}>
						Dlaczego akurat ona?
					</button>
					<button
						className={activeContentIndex === 1 ? "active" : ""}
						onClick={() => setActiveContentIndex(1)}>
						Informacje o niej
					</button>
					<button
						className={activeContentIndex === 2 ? "active" : ""}
						onClick={() => setActiveContentIndex(2)}>
						Wiara
					</button>
					<button
						className={activeContentIndex === 3 ? "active" : ""}
						onClick={() => setActiveContentIndex(3)}>
						Tabin vs Sus
					</button>
				</menu>
				<div id='tab-content'>
					<ul>
						{content[activeContentIndex].map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
