import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import samburu from "../../assets/samburu.jpg";
import kitui from "../../assets/kitui.jpg";
import housing from "../../assets/housing.jpg";
import waste from "../../assets/waste.jpg";

const Portfolio = () => {
	return (
		<div className='main-portfolio'>
			<div className='hero-portfolio'>
				<div className='overlay'>
					<h1>Case Studies</h1>
				</div>
			</div>
			<div className='portfolio container'>
				<PortfolioItem
					image={housing}
					title='Project Management'
					description='Affordable Housing Management'
					link='/housing'
				/>
				<PortfolioItem
					image={samburu}
					title='Research'
					description='Samburu Water Analysis'
					link='/samburu'
				/>
				<PortfolioItem
					image={samburu}
					title='Agriculture'
					description='Soil Analysis'
					link='/kisumu'
				/>
				<PortfolioItem
					image={kitui}
					title='Research'
					description='Kitui Water Analysis'
					link='/kitui'
				/>

				<PortfolioItem
					image={samburu}
					title='Construction'
					description='Road Construction Analysis'
					link='/kalashat'
				/>
				<PortfolioItem
					image={waste}
					title='Engineering'
					description='Waste Management'
					link='/ocheanbays'
				/>
			</div>
		</div>
	);
};

export default Portfolio;
