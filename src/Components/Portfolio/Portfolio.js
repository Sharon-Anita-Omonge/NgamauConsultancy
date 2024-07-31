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
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
				<PortfolioItem
					image={samburu}
					title='Business'
					description='Market Analysis'
				/>
			</div>
		</div>
	);
};

export default Portfolio;
