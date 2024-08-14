import React from "react";
import "./CaseStudy.css";

const Ksm = () => {
	return (
		<div className='kisumu'>
			<div className='hero-kisumu'>
				<h1>Kisumu Streetlight Maintainance</h1>
			</div>
			<div className='case-study container'>
				<div className='case-study-main'>
					<h2>About Projects</h2>
					<p>
						The project involves the maintenance of highway streetlights to
						ensure consistent and reliable illumination for road safety and
						security. This includes regular inspections, repairs, and
						replacements of streetlight components, as well as implementing
						energy-efficient solutions to reduce operational costs and
						environmental impact.
					</p>
					<div className='case-study-stats'>
						<div>
							<h2>1+</h2>
							<p>Project expected duration (yrs)</p>
						</div>
						<div>
							<h2>50+</h2>
							<p>Employers working</p>
						</div>
						<div>
							<h2>99%</h2>
							<p>Satisfied customers</p>
						</div>
					</div>
					<p>
						Our team provided a wide range of services including the preparation
						of feasibility studies, detailed engineering designs, and drawings.
						We also developed the engineer’s estimate and prepared bid
						documents. During the implementation phase, our team supervised the
						maintenance works and oversaw the installation of energy-efficient
						lighting systems.
					</p>

					<div className='case-study-list'>
						<h2>Project Goals</h2>

						<ul>
							<li>
								Ensuring consistent and reliable illumination of highway
								streetlights.
							</li>
							<li>
								Implementing energy-efficient solutions to reduce operational
								costs.
							</li>
							<li>
								Enhancing road safety and security through effective streetlight
								maintenance.
							</li>
							<li>
								Reducing environmental impact through the use of sustainable
								lighting technologies.
							</li>
						</ul>
					</div>
				</div>
				<div className='case-study-sidebar'>
					<h2>Project Information</h2>
					<p>
						<strong>About Project:</strong> Maintenance of Highway Streetlights
					</p>
					<p>
						<strong>Client:</strong>County Government of Kisumu
					</p>
					<p>
						<strong>Start Date:</strong> 04 - 03 - 2023
					</p>
					<p>
						<strong>Completion Date:</strong> 04 - 05 - 2024
					</p>
					<p>
						<strong>Location:</strong> Kisumu County, Kenya
					</p>
				</div>
			</div>
		</div>
	);
};

export default Ksm;
