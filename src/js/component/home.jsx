import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const getRandom = (color) => {
		return color[Math.floor(Math.random() * color.length)];
	  };
	let color=["red","yellow","green"]
	return (
		<><div className="stick container"></div>
		<div className="container">
			<div className="traficc-light">
				<div
					onClick={() => setSelectedColor(color[0])}
					className={"light red" + (selectedColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor(color[1])}
					className={"light yellow " + (selectedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor(color[2])}
					className={"light green " + (selectedColor === "green" ? " glow" : "")
					}></div>
			</div>
			</div>
			<div className="container-button">
			<button onClick={() => setSelectedColor(getRandom(color))}> Button
			</button>
			</div>
		</>
	);
};

export default Home;
