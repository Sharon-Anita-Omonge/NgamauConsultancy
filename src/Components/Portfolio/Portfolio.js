import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import samburu from "../../assets/samburu.jpg";
import kitui from "../../assets/kitui.jpg";
import housing from "../../assets/housing.jpg";
import waste from "../../assets/waste.jpg";
import kisumu from "../../assets/kisumu.jpg";
import Kalashat from "../../assets/kalashat.jpg";

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
					image={kisumu}
					title='Engineering'
					description='Street Lights Maintainance'
					link='/kisumu'
				/>
				<PortfolioItem
					image={kitui}
					title='Research'
					description='Kitui Water Analysis'
					link='/kitui'
				/>

				<PortfolioItem
					image={Kalashat}
					title='Construction'
					description='Upgrading of Roads'
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
