import React from "react";
import "./InfoItem.css";

const InfoItem = ({ number, title, description }) => {
	return (
		<div className='info-item'>
			<div className='info-number'>{number}</div>
			<div className='info-content'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoItem;
