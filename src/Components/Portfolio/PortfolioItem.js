import React from "react";
import "./Portfolio.css";
import arrow from "../../assets/arrow-up.png";
import { Link } from "react-router-dom";

const PortfolioItem = ({ image, title, description, link }) => {
	return (
		<div className='portfolio-item'>
			<img src={image} alt={title} className='portfolio-image' />
			<div className='overlay-portfolio'>
				<Link to={link}>
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
