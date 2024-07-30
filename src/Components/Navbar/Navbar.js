import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-colorless.png";
import phone from "../../assets/telephone.png";
import "./Navbar.css";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	let navbarClasses = ["navbar"];
	if (menuOpen) {
		navbarClasses.push("menu-open");
	}

	return (
		<div className='nav'>
			<nav className={navbarClasses.join(" ")}>
				<div className='ngamau'>
					<img src={logo} alt='' className='logo' />
					<h5>NGAMAU LIMITED</h5>
				</div>
				<div className='menu-toggle' onClick={handleToggleMenu}>
					☰
				</div>
				<ul className={menuOpen ? "open" : ""}>
					<li onClick={handleCloseMenu}>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/about'>About</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/services'>Services</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/portfolio'>Portfolio </NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul>
				<div className='phone'>
					<img src={phone} alt='' className='call' />
					<div className='call-inq'>
						<h5>Have Any Questions?</h5>
						<h5>+254 710 466 533</h5>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
