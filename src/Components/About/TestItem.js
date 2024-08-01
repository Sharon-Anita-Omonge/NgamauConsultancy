import React from "react";
import "./TetsItem.css";

const TestimonialItem = ({ quote, author, position }) => {
	return (
		<div className='testimonial-item'>
			<blockquote>"{quote}"</blockquote>
			<p className='author'>{author}</p>
			<p className='position'>{position}</p>
		</div>
	);
};

export default TestimonialItem;
