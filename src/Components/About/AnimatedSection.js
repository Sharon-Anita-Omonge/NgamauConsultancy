import React from "react";
import "./AnimatedSection.css";
import middleImage from "../../assets/abt1.jpg";
import operation from "../../assets/operational-system.png";
import manpower from "../../assets/skills.png";
import global from "../../assets/network.png";
import technology from "../../assets/research-paper.png";

const AnimatedSection = () => {
	return (
		<div className='main-animatedsection'>
			<div className='choose-animated'>
				<h5> why choose us</h5>
				<h2>
					Our skills are the main reasons why <br />
					<strong>
						<i>clients choose us</i>
					</strong>
				</h2>
			</div>

			<div className='animated-section'>
				<div className='left-column'>
					<div className='icon-item'>
						<div className='icon'>
							<img src={operation} alt='' />
						</div>
						<h4>Versatile Operation</h4>
						<span>
							Ngamau delivers comprehensive business solutions for precise data
							analysis{" "}
						</span>
					</div>
					<div className='icon-item'>
						<div className='icon'>
							<img src={manpower} alt='' />
						</div>
						<h4>Skilled Manpower</h4>
						<span>
							We boasts a team of highly skilled professionals for optimal
							project execution.{" "}
						</span>
					</div>
				</div>
				<div className='middle-column'>
					<img src={middleImage} alt='Middle' className='animated-image' />
				</div>
				<div className='right-column'>
					<div className='icon-item'>
						<div className='icon'>
							<img src={global} alt='' />
						</div>
						<h4>Global Reach</h4>
						<span>
							Our global presence ensures effective solutions across diverse
							markets{" "}
						</span>
					</div>
					<div className='icon-item'>
						<div className='icon'>
							<img src={technology} alt='' />
						</div>
						<h4>Research Technology</h4>
						<span>
							Ngamau employs cutting-edge technology for advanced research and
							innovation.{" "}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedSection;
