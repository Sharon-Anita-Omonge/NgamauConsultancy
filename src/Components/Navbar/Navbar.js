import React, { useState, useEffect } from "react";
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

	// Close menu on window resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 860) {
				setMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className='nav'>
			<nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
				<div className='ngamau'>
					<img src={logo} alt='Ngamau Logo' className='logo' />
					<h5>NGAMAU LIMITED</h5>
				</div>
				<div className='menu-toggle' onClick={handleToggleMenu}>
					☰
				</div>
				<ul className={menuOpen ? "open" : ""}>
					<li onClick={handleCloseMenu}>
						<NavLink exact to='/' activeClassName='active'>
							Home
						</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/about' activeClassName='active'>
							About
						</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/services' activeClassName='active'>
							Services
						</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/portfolio' activeClassName='active'>
							Portfolio
						</NavLink>
					</li>
					<li onClick={handleCloseMenu}>
						<NavLink to='/contact' activeClassName='active'>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className='phone'>
					<img src={phone} alt='Phone' className='call' />
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
