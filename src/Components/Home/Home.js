import React, { useState } from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import yellowemail from "../../assets/yellowmail.png";
import yellowperson from "../../assets/yellowuser.png";
import listpic3 from "../../assets/listpic3.jpg";
import listpic2 from "../../assets/listpic2.jpg";
import listpic4 from "../../assets/listpic4.jpg";
import arrowup from "../../assets/arrow-up.png";
import arrowupblack from "../../assets/arrowblack.png";
import image1 from "../../assets/image1.jpg";
import { Link } from "react-router-dom";
import HomeAbout from "./HomeCollapsable";
import RequestCallback from "./RequestCallBack";

const Home = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const formDataObj = new FormData(form);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formDataObj,
			});

			const result = await response.json();

			if (result.success) {
				console.log("SUCCESS!", result.message);
				alert("Your request has been sent successfully.");
			} else {
				console.error("FAILED...", result.message);
				alert("Failed to send the request. Please try again later.");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Failed to send the request. Please try again later.");
		}
	};

	return (
		<div className='home'>
			<div>
				<Hero />
			</div>
			<div className='home-form'>
				<h3>For Consultation</h3>
				<form onSubmit={handleSubmit}>
					<input type='hidden' name='access_key' value='your_access_key' />
					<input type='hidden' name='subject' value='Consultation Request' />
					<div className='form-group'>
						<img src={yellowperson} alt='Person Icon' />
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Your name'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='form-group'>
						<img src={yellowemail} alt='Email Icon' />
						<input
							type='email'
							id='email'
							name='email'
							placeholder='E-mail'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<button type='submit' className='btn'>
						Send Request
					</button>
				</form>
			</div>
			<div className='services-list container'>
				<div className='list-left'>
					<h5>WE ARE NGAMAU</h5>
					<h2>
						We’re building a remarkable future,{" "}
						<strong>
							<i>Join us</i>{" "}
						</strong>
					</h2>
					<p>
						Ngamau offers comprehensive consulting and training services across
						all fields to help firms achieve strategic growth and efficient
						management.
					</p>
					<p>
						<strong>
							<i>Here is our consultancy list.</i>
						</strong>
					</p>
					<div className='item-list'>
						<ul className='items-list'>
							<li>Research and Development </li>
							<li>Human Resource Development </li>
							<li>Information Technology (IT) </li>
							<li>Project Management </li>
						</ul>

						<ul className='items-list'>
							<li>Architecture consultancy </li>
							<li>Engineering consultancy</li>
							<li>Quality Survey consultancy</li>
						</ul>
					</div>
					<Link to='/services' className='nav-link'>
						<button className='special-btn' type='button'>
							View more
							<img src={arrowupblack} alt='arrow up' className='arrowblack' />
						</button>
					</Link>
				</div>
				<div className='list-right'>
					<img src={listpic2} alt='' id='list1' />
					<img src={listpic4} alt='' id='list2' />
					<img src={listpic3} alt='' id='list3' />
				</div>
			</div>
			<div className='choose-home'>
				<div className='choose-left'>
					<img src={image1} alt='' />
				</div>
				<div className='choose-right container'>
					<div className='context-right'>
						<h5>WHY CHOOSE US</h5>
						<h2>Creating successful venture is always the priority</h2>
						<p>
							Throughout each business year, our company has forged successful
							partnerships with remarkable organizations from all around Kenya.
							Our commitment to sustainability has guided our collaboration
							efforts.
						</p>
					</div>
					<Link to='/portfolio' className='nav-link'>
						<button className='btn button' type='link'>
							View more
							<img src={arrowup} alt='' className='arrow-up' />
						</button>
					</Link>
				</div>
			</div>
			<div>
				<HomeAbout />
			</div>
			<div className='margin-div'>
				<RequestCallback />
			</div>
		</div>
	);
};

export default Home;
