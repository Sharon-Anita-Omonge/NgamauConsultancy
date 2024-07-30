import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CollapsibleSection = ({ title, children, isOpen, onClick }) => {
	return (
		<div>
			<div className='header' onClick={onClick}>
				<h4>{title}</h4>
				<span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
			</div>
			{isOpen && <div className='content'>{children}</div>}
		</div>
	);
};

export default CollapsibleSection;
