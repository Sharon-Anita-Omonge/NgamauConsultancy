import React from "react";
import "./About.css";
import arrowup from "../../assets/arrowblack.png";
import TestimonialSection from "./Testimonials";
import { Link } from "react-router-dom";
import ExperienceSection from "./ExperienceSection";
import AnimatedSection from "./AnimatedSection";

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
							<button className='btn special-btn'>
								View More
								<img src={arrowup} alt='' />
							</button>
						</Link>
					</div>
				</div>
				<div>
					<ExperienceSection />
				</div>
				<div>
					<AnimatedSection />
				</div>
				<div>
					<TestimonialSection />
				</div>
			</div>
		</div>
	);
};

export default About;
