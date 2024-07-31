import React from "react";
import "./Portfolio.css";
import arrow from "../../assets/arrow-up.png"; // Example arrow icon
import { Link } from "react-router-dom";

const PortfolioItem = ({ image, title, description }) => {
	return (
		<div className='portfolio-item'>
			<img src={image} alt={title} className='portfolio-image' />
			<div className='overlay-portfolio'>
				<Link to='/samburu'>
					<img src={arrow} alt='Arrow' className='arrow-icon' />
				</Link>
				<div className='text-container'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
