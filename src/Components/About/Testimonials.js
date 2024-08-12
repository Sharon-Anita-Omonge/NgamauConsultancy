import React, { useState } from "react";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
	{
		id: 1,
		text: "Ngamau Consultancy Limited has been an exceptional partner in our recent project. Their expertise in project management and their thorough understanding of our needs were evident throughout the engagement. The team provided insightful recommendations and delivered results that exceeded our expectations. I highly recommend their services to anyone seeking reliable and professional consultancy.",
		author: "Akinyi Violet, CEO of Ocheanbays ",
	},
	{
		id: 2,
		text: "Working with Ngamau Consultancy Limited has been a game-changer for our construction projects. Their comprehensive approach and attention to detail ensured that every aspect of our projects was meticulously managed. Their ability to navigate complex challenges and provide practical solutions has greatly contributed to our success. I look forward to continued collaboration with their team.",
		author: "Lenard Kinyajui, Manager of Kalashat",
	},
	{
		id: 3,
		text: "Ngamau Consultancy Limited has demonstrated exceptional competence in their work with the Ministry of Environment. Their thorough analysis and strategic recommendations have been invaluable in our environmental projects. Their professionalism and commitment to delivering high-quality results are commendable. I am confident in their ability to tackle any consultancy challenge with expertise and dedication.",
		author: "Tabitha Lwanga, Ministry of Environment",
	},
];

const TestimonialSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState("next");

	const handleNext = () => {
		setDirection("next");
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setDirection("prev");
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='testimonial-section'>
			<div className='left-side'>
				<h5>CLIENTS TESTIMONIALS</h5>
				<h2>
					<span> 10K+ </span> Customers are served
				</h2>
				<p>Words by our amazing clients</p>
			</div>
			<div className='right-side'>
				<div className={`testimonial-content ${direction}`}>
					<h2>{testimonials[currentIndex].text}</h2>
					<p>- {testimonials[currentIndex].author}</p>
				</div>
				<div className='testimonial-navigation'>
					<button onClick={handlePrev}>
						<FaArrowLeft />
					</button>
					<button onClick={handleNext}>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
