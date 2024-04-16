import img from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function getRandomDescription() {
	return reactDescriptions[
		Math.floor(Math.random() * (reactDescriptions.length + 1))
	];
}
export default function Header() {
	const description = getRandomDescription();
	return (
		<header>
			<img
				src={img}
				alt='Stylized atom'
			/>
			<h1>Jebe ci mame</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
