import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import mtito from "../../assets/mtitoandei.jpg";
import email from "../../assets/bluemail.png";
import "./Contact.css";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
		phone: "",
		message: "",
	});

	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		try {
			const response = await axios.post("https://api.web3forms.com/submit", {
				access_key: "YOUR_ACCESS_KEY",
				...formData,
			});
			if (response.data.success) {
				setStatus("Message sent successfully!");
				setFormData({
					firstName: "",
					email: "",
					phone: "",
					message: "",
				});
			} else {
				setStatus("Failed to send message.");
			}
		} catch (error) {
			setStatus("Failed to send message.");
		}
	};

	return (
		<div className='contact-page'>
			<div className='hero-contact'>
				<div className='overlay'>
					<h1>Contact Us</h1>
				</div>
			</div>
			<div className='contact-info container'>
				<div className='location'>
					<img src={mtito} alt='' />
				</div>
				<div className='contact-map'>
					<LoadScript googleMapsApiKey='AIzaSyD3IA3QZPpNHMi74ayyTgcZ5iXgSEKRDCU'>
						<GoogleMap
							mapContainerStyle={{ width: "100%", height: "300px" }}
							center={{ lat: -1.286389, lng: 36.817223 }}
							zoom={14}
						>
							<Marker position={{ lat: -1.286389, lng: 36.817223 }} />
						</GoogleMap>
					</LoadScript>
				</div>
				<div className='contact-details'>
					<h2>Contact details</h2>
					<p>
						<FaMapMarkerAlt /> 144 Mtito Andei Road, Nairobi, Kenya.
					</p>
					<p>
						<FaPhone /> +254 710 466-533
					</p>
					<p>
						<FaEnvelope /> admin@ngamaulimited.com
					</p>
				</div>
			</div>

			<div className='contact-form-section container'>
				<form className='contact-form' onSubmit={handleSubmit}>
					<div>
						<h2>Feedback form</h2>
						<input
							type='text'
							name='firstName'
							placeholder='First name *'
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='E-mail *'
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<input
							type='tel'
							name='phone'
							placeholder='Phone *'
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</div>
					<div className='text-area'>
						<textarea
							name='message'
							placeholder='Your Message *'
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
						<button type='submit'>Submit</button>
						{status && <p className='form-status'>{status}</p>}
					</div>
				</form>
				<div>
					<h2>Your contact</h2>
					<div className='contact-persons'>
						<div className='contact-person'>
							<img src={email} alt='' />
							<div className='text'>
								<p>Clarine Aziza</p>
								<p>Head of communications</p>
								<p>Email: clarineaziza@ngamaulimited.com</p>
							</div>
						</div>
						<div className='contact-person'>
							<img src={email} alt='' />
							<div className='text'>
								<p>Elvin Leware</p>
								<p>Head of communications</p>
								<p>Email: leware@ngamaulimited.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
