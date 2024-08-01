import React, { useState } from "react";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaGooglePlusG,
	FaSkype,
} from "react-icons/fa";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";
import "./Contact.css";

const ContactPage = ({ google }) => {
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
					<h1>About Us</h1>
				</div>
			</div>
			<div className='contact-info'>
				<div className='contact-map'>
					<Map
						google={google}
						zoom={14}
						initialCenter={{ lat: 37.7749, lng: -122.4194 }}
					>
						<Marker position={{ lat: 37.7749, lng: -122.4194 }} />
					</Map>
				</div>
				<div className='contact-details'>
					<h2>Contact details</h2>
					<p>
						<FaMapMarkerAlt /> 144 Mtito Andei Road, Nairobi, Kenya.
					</p>
					<p>
						<FaPhone /> +1 628 123 4000
					</p>
					<p>
						<FaEnvelope /> brandon@consulting.com
					</p>
					<div className='contact-social'>
						<FaFacebookF />
						<FaTwitter />
						<FaLinkedinIn />
						<FaGooglePlusG />
						<FaSkype />
					</div>
				</div>
			</div>
			<div className='contact-form-section'>
				<h2>Feedback form</h2>
				<form className='contact-form' onSubmit={handleSubmit}>
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
					<textarea
						name='message'
						placeholder='Your Message *'
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
					<button type='submit'>Submit</button>
					{status && <p className='form-status'>{status}</p>}
				</form>
				<div className='contact-persons'>
					<h2>Your contact</h2>
					<div className='contact-person'>
						<img src='https://via.placeholder.com/100' alt='Berg Devien' />
						<p>Berg Devien</p>
						<p>Head of communications</p>
						<p>Email: berg@consulting.wp</p>
						<p>Skype: berg.consulting</p>
					</div>
					<div className='contact-person'>
						<img
							src='https://via.placeholder.com/100'
							alt='Priscilla Sorvino'
						/>
						<p>Priscilla Sorvino</p>
						<p>Head of communications</p>
						<p>Email: priscilla@consulting.wp</p>
						<p>Skype: priscilla.consulting</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyD3IA3QZPpNHMi74ayyTgcZ5iXgSEKRDCU",
})(ContactPage);
