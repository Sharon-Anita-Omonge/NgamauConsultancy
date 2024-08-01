import React from "react";
import "./CaseStudy.css";

const Kalashat = () => {
	return (
		<div className='kalashat'>
			<div className='hero-kalashat'>
				<h1>Road Expansion</h1>
			</div>
			<div className='case-study container'>
				<div className='case-study-main'>
					<h2>About Projects</h2>
					<p>
						The main objective of this project is the rehabilitation and
						upgrading of existing roads. This involves removing the current
						2-lane bituminous sections and widening them into a 2-way
						carriageway with a median separator. Additionally, the project
						includes the construction of cycle tracks, footpaths, drainage
						systems, and the installation of street lighting to enhance road
						safety and usability.
					</p>
					<div className='case-study-stats'>
						<div>
							<h2>1+</h2>
							<p>Project expected duration (yrs)</p>
						</div>
						<div>
							<h2>150+</h2>
							<p>Employers working</p>
						</div>
						<div>
							<h2>99%</h2>
							<p>Satisfied customers</p>
						</div>
					</div>
					<p>
						Our staff provided construction supervision to ensure the roads were
						upgraded and rehabilitated to the designed standards.
					</p>

					<div>
						<h2>Project Goals</h2>

						<ul>
							<li>
								Widening the existing 2-lane roads to a 2-way carriageway with a
								median separator.
							</li>
							<li>
								Constructing cycle tracks and footpaths to promote non-motorized
								transport.
							</li>
							<li>
								Installing efficient drainage systems to prevent waterlogging
								and road damage
							</li>
							<li>
								Enhancing road safety and visibility by installing street
								lighting.
							</li>
							<li>
								Ensuring high-quality construction through diligent supervision
								and adherence to design standards.
							</li>
						</ul>
					</div>
				</div>
				<div className='case-study-sidebar'>
					<h2>Project Information</h2>
					<p>
						<strong>About Project:</strong> Rehabilitation and upgrading of
						existing roads
					</p>
					<p>
						<strong>Client:</strong>Kalashat Construction
					</p>
					<p>
						<strong>Start Date:</strong> 19 - 03 - 2022
					</p>
					<p>
						<strong>Completion Date:</strong> 25 - 07 - 2023
					</p>
					<p>
						<strong>Location:</strong> Nairobi County, Kenya
					</p>
				</div>
			</div>
		</div>
	);
};

export default Kalashat;
