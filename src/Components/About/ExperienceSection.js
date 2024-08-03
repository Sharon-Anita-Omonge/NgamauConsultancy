import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = () => {
	return (
		<div className='experience-section'>
			<div className='experience-list'>
				<h5>About company</h5>
				<h2 style={{ fontSize: "2.5rem" }}>
					We are building great future Together,{" "}
					<strong>
						<i>Build with us</i>{" "}
					</strong>
				</h2>
				<div className='experience-item'>
					<div className='number'>1</div>
					<div className='content'>
						<h3>Information Collection</h3>
						<p>
							Giving consultancy for every financial projection report and
							analysis for existing project
						</p>
					</div>
				</div>
				<div className='experience-item'>
					<div className='number'>2</div>
					<div className='content'>
						<h3>Projection Report Analysis</h3>
						<p>
							Giving consultancy for every financial projection report and
							analysis for existing project
						</p>
					</div>
				</div>
				<div className='experience-item'>
					<div className='number'>3</div>
					<div className='content'>
						<h3>Consultation Solution</h3>
						<p>
							Giving consultancy for every financial projection report and
							analysis for existing project
						</p>
					</div>
				</div>
			</div>

			<div className='experience-summary'>
				<div className='experience-years'>
					<h1>35</h1>
					<i>
						<h2>
							Years of <br /> Experience
						</h2>
					</i>
				</div>
				<h5>History</h5>
				<p>
					Since our establishment in 1989, Ngamau has been a one-stop solution
					for Kenyan firms, aiming to create an exceptional milestone in the
					consultancy sector. Throughout these years, we have prioritized
					fostering a healthy operational culture above all else.
				</p>
				<h5>Mission</h5>
				<p>
					At Ngamau, we are dedicated to serving our entire clientele from a
					strategic and informed perspective, ensuring the delivery of
					efficiency and quality. Quality and efficiency are the fundamental
					pillars that define us as a company. We value time as the only
					constant variable, compared to other economic drivers, and strive to
					deliver the best results in the shortest time possible. This
					commitment to efficiency and quality is the breath of our existence,
					propelling us towards a better and more prosperous future.
				</p>
			</div>
		</div>
	);
};

export default ExperienceSection;
