import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const useScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
};

const Sidebar = () => {
	useScrollToTop();

	return (
		<aside className='sidebar'>
			<ul>
				<li>
					<NavLink
						to='/research'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Research and Development
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/humanresource'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Human Resource Development
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/informationtechnology'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Information Technology (IT)
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/projectmanagement'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Project Management
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/architecture'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Architecture Consultancy
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/engineering'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Engineering Consultancy
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/qualitysurvey'
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						Quality Survey Consultancy
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
