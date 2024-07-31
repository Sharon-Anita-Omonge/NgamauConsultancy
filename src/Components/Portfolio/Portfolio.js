import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Portfolio.css";

const PortfolioItem = ({ image, title, description }) => {
	return (
		<div className='portfolio-item'>
			<img src={image} alt={title} className='portfolio-image' />
			<div className='overlay'>
				<div className='text-container'>
					<h3>{title}</h3>
					<p>{description}</p>
					<FaArrowRight className='arrow-icon' />
				</div>
			</div>
		</div>
	);
};

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<PortfolioItem
				image='path_to_image1.jpg'
				title='Business'
				description='Market Analysis'
			/>
			{/* Add more PortfolioItem components as needed */}
		</div>
	);
};

export default Portfolio;
