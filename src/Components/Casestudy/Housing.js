import React from "react";
import "./CaseStudy.css";

const Housing = () => {
	return (
		<div className='housing'>
			<div className='hero-housing'>
				<h1>Affordable Housing Project</h1>
			</div>
			<div className='case-study container'>
				<div className='case-study-main'>
					<h2>About Projects</h2>
					<p>
						Ngamau Consultancy Limited has been awarded a prestigious framework
						agreement by the Ministry of Lands, Public Works, Housing, and Urban
						Development, specifically through the State Department for Housing
						and Urban Development. This agreement is for the procurement of
						consultancy services in construction management and project
						management for affordable housing. Our projects under this framework
						will focus on delivering expert consultancy services to ensure that
						affordable housing projects are managed effectively from inception
						to completion.
					</p>
					<div className='case-study-stats'>
						<div>
							<h2>-</h2>
							<p>Project expected duration (yrs)</p>
						</div>
						<div>
							<h2>20+</h2>
							<p>Employers working</p>
						</div>
						<div>
							<h2>99%</h2>
							<p>Satisfied customers</p>
						</div>
					</div>
					<p>
						Our goal is to provide high-quality, reliable project management
						services that contribute to the development of sustainable and
						affordable housing solutions.
					</p>

					<div>
						<h2>Project Goals</h2>
						<p>
							Our consultancy services for affordable housing are aimed at
							achieving the following:
						</p>
						<ul>
							<li>
								Ensuring timely, cost-effective, and high-quality project
								delivery through efficient management and coordination.
							</li>
							<li>
								Providing comprehensive project management to meticulously plan,
								execute, and monitor all aspects of affordable housing projects.
							</li>
							<li>
								Upholding rigorous quality standards and ensuring compliance
								with relevant regulations and best practices.
							</li>
							<li>
								Integrating sustainable practices into housing projects to
								enhance environmental performance and long-term viability.
							</li>
							<li>
								Delivering housing solutions that meet community needs and align
								with broader urban development goals.
							</li>
							<li>
								Fostering transparency and accountability throughout the project
								lifecycle to build trust and ensure effective stakeholder
								engagement.
							</li>
							<li>
								Introducing innovative approaches to address the complexities of
								affordable housing development and improve overall project
								outcomes.
							</li>
						</ul>
						<p>
							Our goal is to advance the development of affordable housing by
							providing expert consultancy that ensures effective project
							management, high-quality construction, and sustainable solutions
							for community benefit.
						</p>
					</div>
				</div>
				<div className='case-study-sidebar'>
					<h2>Project Information</h2>
					<p>
						<strong>About Project:</strong>
						Construction and project management for affordable housing
					</p>
					<p>
						<strong>Client:</strong> Ministry of Lands, Public Works, Housing,
						and Urban Development
					</p>
					<p>
						<strong>Commencement Date:</strong> 29 - 02 - 2024
					</p>
					<p>
						<strong>Location:</strong> Nairobi County, Kenya
					</p>
				</div>
			</div>
		</div>
	);
};

export default Housing;
