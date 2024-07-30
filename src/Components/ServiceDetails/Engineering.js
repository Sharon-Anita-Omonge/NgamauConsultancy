import React from "react";
import Sidebar from "./sidebar";
import "./Details.css";

const Engineering = () => {
	return (
		<div id='engineering'>
			<div className='engineering-hero'>
				<h1>Engineering Consultancy</h1>
			</div>
			<div className='details'>
				<div className='details-text container'>
					<div>
						<h2>Structural Engineering</h2>
						<p>
							Structural engineering is a critical component of building safety
							and integrity. Ngamau Consultancy Ltd offers expert structural
							engineering services to design robust and resilient structures.
							Our engineers use advanced modeling techniques and materials to
							create designs that withstand environmental and load conditions.
						</p>
						<p>
							We work closely with architects and construction teams to
							integrate structural solutions that enhance building performance
							and longevity. Ngamau Consultancy Ltd's expertise ensures that
							structures are not only functional but also safe and sustainable.
						</p>
					</div>
					<div>
						<h2>Civil Engineering</h2>
						<p>
							Civil engineering encompasses a broad range of infrastructure
							projects, including roads, bridges, and water systems. Ngamau
							Consultancy Ltd provides comprehensive civil engineering services
							to support urban development and improve public infrastructure.
							Our engineers design and manage projects that meet community needs
							and regulatory standards.
						</p>
						<p>
							From initial feasibility studies to construction management,
							Ngamau Consultancy Ltd ensures that civil engineering projects are
							executed efficiently and effectively. Our focus on sustainability
							and innovation drives the successful completion of infrastructure
							projects that enhance community well-being.
						</p>
					</div>
					<div>
						<h2>Environmental Engineering</h2>
						<p>
							Environmental engineering is essential for mitigating the impact
							of construction projects on natural ecosystems. Ngamau Consultancy
							Ltd specializes in environmental assessments and sustainable
							engineering solutions that minimize environmental degradation. We
							develop strategies to manage waste, reduce emissions, and protect
							natural resources.
						</p>
						<p>
							Our environmental engineers conduct thorough impact assessments
							and implement green technologies to ensure compliance with
							environmental regulations. Ngamau Consultancy Ltd's commitment to
							environmental stewardship promotes sustainable development and
							protects ecological balance.
						</p>
					</div>
					<div>
						<h2>Mechanical and Electrical Engineering</h2>
						<p>
							Mechanical and electrical engineering are vital for the
							functionality and comfort of modern buildings. Ngamau Consultancy
							Ltd provides expert mechanical and electrical engineering
							services, designing efficient systems for heating, ventilation,
							air conditioning, lighting, and power distribution.
						</p>
						<p>
							Our engineers ensure that mechanical and electrical systems are
							integrated seamlessly with architectural and structural elements.
							By prioritizing energy efficiency and reliability, Ngamau
							Consultancy Ltd enhances building performance and user experience.
						</p>
					</div>
					<div>
						<h2>Transportation Engineering</h2>
						<p>
							Transportation engineering focuses on the design and development
							of transportation systems, including roads, highways, and public
							transit. Ngamau Consultancy Ltd offers specialized transportation
							engineering services to improve mobility and reduce traffic
							congestion. Our engineers develop efficient transportation
							solutions that enhance safety and accessibility.
						</p>
						<p>
							We conduct traffic studies, design road networks, and plan public
							transit systems to meet the needs of growing communities. Ngamau
							Consultancy Ltd's transportation engineering services contribute
							to the creation of sustainable and efficient transportation
							infrastructure.
						</p>
					</div>
					<div>
						<h2>Geotechnical Engineering</h2>
						<p>
							Geotechnical engineering involves the study of soil and rock
							properties to support the design and construction of foundations
							and earth structures. Ngamau Consultancy Ltd provides
							comprehensive geotechnical engineering services to ensure the
							stability and safety of construction projects.
						</p>
						<p>
							Our geotechnical engineers conduct site investigations, soil
							testing, and foundation design to address potential challenges
							posed by ground conditions. Ngamau Consultancy Ltd's expertise in
							geotechnical engineering ensures that projects are built on solid
							foundations, minimizing risks and enhancing structural integrity.
						</p>
					</div>
				</div>
				<div className='details-list'>
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default Engineering;
