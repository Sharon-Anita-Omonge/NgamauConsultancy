import React from "react";
import "./Testimonials.css";
import TestimonialItem from "./TestItem";

const TestimonialSection = () => {
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
				<div className='testimonials'>
					<TestimonialItem
						quote='Gurus’s digital marketing strategies have helped us reach new customers and expand our business. They are results-driven and always go the extra mile to deliver outstanding results.'
						author='Melisa Scarlet'
						position='CEO of Asana Pro Ltd.'
					/>
					<TestimonialItem
						quote='Gurus’s expertise in data analysis has been invaluable. Their insights have enabled us to make informed decisions that have significantly improved our operations.'
						author='John Smith'
						position='CEO of Zendex Inc.'
					/>
					{/* Add more testimonials as needed */}
				</div>
			</div>
		</div>
	);
};

export default TestimonialSection;
