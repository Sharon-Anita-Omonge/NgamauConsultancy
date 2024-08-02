import React, { useState } from "react";
import "./Testimonials.css";
import TestimonialItem from "./TestItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			quote:
				"Gurus’s digital marketing strategies have helped us reach new customers and expand our business. They are results-driven and always go the extra mile to deliver outstanding results.",
			author: "Melisa Scarlet",
			position: "CEO of Asana Pro Ltd.",
		},
		{
			quote:
				"Gurus’s expertise in data analysis has been invaluable. Their insights have enabled us to make informed decisions that have significantly improved our operations.",
			author: "John Smith",
			position: "CEO of Zendex Inc.",
		},
		// Add more testimonials as needed
	];

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<div className='testimonial-section'>
			<div className='left-side'>
				<h2>
					25k+ <br /> CUSTOMERS ARE SERVED
				</h2>
				<p>Words by our Amazing Clients</p>
				<p>
					Gurus offers a full range of consultancy and training for data
					consultation strategies.
				</p>
			</div>

			<div className='right-side'>
				<div className='arrow left-arrow' onClick={prevTestimonial}>
					<FaArrowLeft />
				</div>
				<div className='testimonials'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`testimonial-item ${
								index === currentIndex ? "active" : ""
							}`}
						>
							<TestimonialItem
								quote={testimonial.quote}
								author={testimonial.author}
								position={testimonial.position}
							/>
						</div>
					))}
				</div>
				<div className='arrow right-arrow' onClick={nextTestimonial}>
					<FaArrowRight />
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
