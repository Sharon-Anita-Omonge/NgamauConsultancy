import React from "react";
import "./Portfolio.css";
import samburu from "../../assets/samburu.jpg"; // Example image, repeat for each item
import PortfolioItem from "./PortfolioItem";

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
					image={samburu}
					title='Engineering'
					description='Structural Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
					link='/kitui'
				/>
			</div>
		</div>
	);
};

export default Portfolio;
