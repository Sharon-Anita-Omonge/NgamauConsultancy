import React from "react";
import "./Footer.css";
import clock from "../../assets/blueclock.png";
import phone from "../../assets/bluephone.png";
import address from "../../assets/bluelocation.png";
import email from "../../assets/bluemail.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='main-footer'>
				<div className='footer-section'>
					<img src={address} alt='Address Icon' className='footer-icon' />
					<p className='footer-text'>
						144 Mtito Andei Road, <br /> P.O.BOX 21436-00505, <br /> Nairobi,
						Kenya
					</p>
				</div>
				<div className='footer-section'>
					<img src={clock} alt='Operation Hours Icon' className='footer-icon' />

					<p className='footer-text'>
						Mon-Fri: 9am - 5pm <br />
						Sunday: Closed
					</p>
				</div>
				<div className='footer-section'>
					<img src={phone} alt='Phone Icon' className='footer-icon' />
					<p className='footer-text call-icon'>+254 710 466 533</p>
				</div>
				<div className='footer-section'>
					<img src={email} alt='Email Icon' className='footer-icon' />
					<p className='footer-text'>info@ngamaulimited.co.ke</p>
				</div>
			</div>
			<div className='footer-copyright'>
				&copy; {currentYear} Ngamau Limited. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
