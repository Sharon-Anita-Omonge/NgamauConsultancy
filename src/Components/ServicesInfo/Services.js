import React from "react";
import "./Services.css";
import next from "../../assets/bluearrow.png";
import { NavLink } from "react-router-dom";
import research from "../../assets/hero4.jpeg";
import survey from "../../assets/suurvey.jpg";
import architecture from "../../assets/Architecture.jpg";
import engineering from "../../assets/engineering2.jpeg";
import resource from "../../assets/humanresources.jpg";
import project from "../../assets/project.jpg";
import IT from "../../assets/IT.jpg";

const Services = () => {
	return (
		<div className='service'>
			<div className='hero-services'>
				<div className='overlay'>
					<h1>Services Offered</h1>
				</div>
			</div>
			<div className='service-list container'>
				<div className='item'>
					<img src={research} alt='' className='service-pic' />
					<h5>Research and Development</h5>
					<p>
						Evaluating the effects of proposed actions on both people and the
						environment is crucial for informed decision-making.{" "}
					</p>
					<div>
						<NavLink to='/research' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={resource} alt='' className='service-pic' />
					<h5>Human Resource Development</h5>
					<p>
						Often, the primary goal of establishing a business or firm is profit
						gain, which largely depends on the company's personnel.
					</p>
					<div>
						<NavLink to='/humanresource' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={IT} alt='' className='service-pic' />
					<h5>Information Technology (IT)</h5>
					<p>
						Business executives consistently seek new information to make
						pragmatic decisions that benefit their organizations.
					</p>
					<div>
						<NavLink to='/informationtechnology' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={project} alt='' className='service-pic' />
					<h5>Project Management</h5>
					<p>
						Effective project management starts with strategic planning, where
						objectives are defined, resources are allocated, and timelines are
						established.
					</p>
					<div>
						<NavLink to='/projectmanagement' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={engineering} alt='' className='service-pic' />
					<h5>Engineering Consultancy</h5>
					<p>
						We work closely with architects and construction teams to integrate
						structural solutions that enhance building performance and
						longevity.
					</p>
					<div>
						<NavLink to='/engineering' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={architecture} alt='' className='service-pic' />
					<h5>Architecture Consultancy</h5>
					<p>
						Our team of architects works collaboratively to ensure that each
						project has a unique and compelling design vision.
					</p>
					<div>
						<NavLink to='/architecture' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
				<div className='item'>
					<img src={survey} alt='' className='service-pic' />
					<h5>Quality Survey</h5>
					<p>
						Our focus on rigorous quality audits helps prevent defects, reduce
						costs, and improve overall project outcomes.
					</p>
					<div>
						<NavLink to='/qualitysurvey' className='service-link'>
							<h4>Read More</h4>
							<img src={next} alt='' className='arrow' />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
