import React from "react";
import "./About.css";
import InfoItem from "./Info";
import arrowup from "../../assets/arrowblack.png";
import TestimonialSection from "./Testimonials";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className='about'>
			<div className='hero-about'>
				<div className='overlay'>
					<h1>About Us</h1>
				</div>
			</div>
			<div className='about-section'>
				<div className='abt-top'>
					<div className='top-left'>
						<h2>
							<i style={{ fontWeight: "700" }}>
								We Built trust in our customer’s mind
							</i>{" "}
							through creativity & market analytics
						</h2>
					</div>
					<div className='top-right'>
						<p>
							Ngamau Consultancy Limited offers a comprehensive suite of
							consultancy and training services, including data analysis,
							business consultation, and strategic planning. We provide valuable
							opportunities for new ventures to thrive and achieve their goals.
							Our expert team delivers tailored solutions to address your unique
							business challenges and drive success.
						</p>
						<Link to='/services' className='nav-link'>
							<button className='btn but'>
								View More
								<img src={arrowup} alt='' />
							</button>
						</Link>
					</div>
				</div>
				<div className='content'>
					<div className='left-side'>
						<h2>
							We are building great future Together, <span>Be with us</span>
						</h2>
						<InfoItem
							number='1'
							title='Information Collection'
							description='Giving consultancy for every financial projection report and analysis for existing project'
						/>
						<InfoItem
							number='2'
							title='Projection Report Analysis'
							description='Giving consultancy for every financial projection report and analysis for existing project'
						/>
						<InfoItem
							number='3'
							title='Consultation Solution'
							description='Giving consultancy for every financial projection report and analysis for existing project'
						/>
					</div>

					<div className='right-side'>
						<h2>
							16 <span>Years of Experience</span>
						</h2>
						<p>
							Gurus is now operating for 16 years with two hundred amazing
							business professionals with the dream of creating positive impact
							in respective management fields they are working.
						</p>

						<div className='services'>
							<div className='service-item'>
								<h3>Versatile Operation</h3>
								<p>
									Gurus offers full range of business methods for data analysis
								</p>
							</div>
							<div className='service-item'>
								<h3>Global Reach</h3>
								<p>
									Gurus offers full range of business methods for data analysis
								</p>
							</div>
							<div className='service-item'>
								<h3>Skilled Manpower</h3>
								<p>
									Gurus offers full range of business methods for data analysis
								</p>
							</div>
							<div className='service-item'>
								<h3>Research Technology</h3>
								<p>
									Gurus offers full range of business methods for data analysis
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='testimonials'>
					<TestimonialSection />
				</div>
			</div>
		</div>
	);
};

export default About;
