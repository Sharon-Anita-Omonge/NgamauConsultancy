import React, { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import "./Home.css";

const HomeAbout = () => {
	const [openSection, setOpenSection] = useState("About Company History"); // default open section

	const handleSectionClick = (title) => {
		setOpenSection(openSection === title ? "" : title); // toggle open/close
	};

	return (
		<div className='home-about container'>
			<div className='about-left'>
				<h5>ABOUT COMPANY</h5>
				<p></p>
				<h2>
					Fostering opportunities through sustainability,{" "}
					<strong>
						<i>that’s our motto</i>
					</strong>
				</h2>
				<p>
					Ngamau offers a comprehensive suite of consultancy and training
					services, specializing in areas such as Research and Development,
					Human Resource Development, Information Technology (IT), Project
					Management, and more.
				</p>
			</div>
			<div className='about-right'>
				<CollapsibleSection
					title='About Company History'
					isOpen={openSection === "About Company History"}
					onClick={() => handleSectionClick("About Company History")}
				>
					<p>
						Since our establishment in 1989, Ngamau has been a one-stop solution
						for Kenyan firms, aiming to create an exceptional milestone in the
						consultancy sector. Throughout these years, we have prioritized
						fostering a healthy operational culture above all else.
					</p>
				</CollapsibleSection>
				<CollapsibleSection
					title='Company Mission we follow'
					isOpen={openSection === "Company Mission we follow"}
					onClick={() => handleSectionClick("Company Mission we follow")}
				>
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
				</CollapsibleSection>
				<CollapsibleSection
					title='Company Growth Objective'
					isOpen={openSection === "Company Growth Objective"}
					onClick={() => handleSectionClick("Company Growth Objective")}
				>
					<p>
						Business Objective At Ngamau, our primary objective is to provide
						comprehensive consultancy services that cater to the diverse needs
						of our clients across various sectors, including engineering and
						agriculture. We aim to deliver innovative solutions that enhance
						operational efficiency and drive sustainable growth. By leveraging
						our expertise and commitment to quality, we strive to become a
						trusted partner for our clients, helping them achieve their goals
						and excel in their respective industries. Our focus is on fostering
						long-term relationships, ensuring client satisfaction, and
						continuously improving our services to meet the evolving demands of
						the market.
					</p>
				</CollapsibleSection>
			</div>
		</div>
	);
};

export default HomeAbout;
