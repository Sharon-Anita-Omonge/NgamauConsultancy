import React, { useState, useEffect } from "react";
import con1 from "../../assets/con1.jpg";
import con2 from "../../assets/con2.jpg";
import con4 from "../../assets/con4.jpg";
import con5 from "../../assets/con5.jpg";
import "./Hero.css";

const images = [
	{ src: con1, caption: "Helping Companies Navigate Changes" },
	{ src: con2, caption: "A Partner for Growth and Transformation" },
	{ src: con4, caption: "We Build Trust in Our Customer's Mind" },
	{ src: con5, caption: "Ngamau Limited - Beyond Consulting" },
];

const Hero = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='hero' style={{ OverflowX: "hidden" }}>
			{images.map((image, index) => (
				<div
					key={index}
					className={`image-container ${
						index === currentImageIndex ? "visible" : "hidden"
					}`}
					style={{ backgroundImage: `url(${image.src})` }}
				>
					<div className='overlay'></div>
					<div className='caption'>{image.caption}</div>
				</div>
			))}
		</div>
	);
};

export default Hero;
