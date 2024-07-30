import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px;
	border-radius: 5px;
	width: 300px;
`;

const Select = styled.select`
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	border: none;
`;

const RequestCallback = () => {
	const [formStatus, setFormStatus] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const formData = new FormData(e.target);

		try {
			const response = await axios.post(
				"https://api.web3forms.com/submit",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200) {
				setFormStatus("Message sent successfully!");
			} else {
				setFormStatus("Message failed to send.");
			}
		} catch (error) {
			setFormStatus("Message failed to send.");
		} finally {
			setIsSubmitting(false);
			e.target.reset(); // Reset the form after submission
		}
	};

	return (
		<div className='main-callback'>
			<div className='callback container'>
				<div className='callback-left'>
					<h2>
						<span style={{ color: "var(--blue)" }}>REQUEST</span> A CALL BACK.
					</h2>
					<p>
						Would you like to speak to one of our advisers over the phone? Just
						submit your details and we’ll be in touch shortly. You can also
						email us if you would prefer.
					</p>
				</div>
				<div className='callback-right'>
					{isSubmitting && (
						<p className='sending-message'>Sending message...</p>
					)}
					{formStatus && <p className='form-status'>{formStatus}</p>}
					<Form onSubmit={handleSubmit}>
						<input type='hidden' name='access_key' value='YOUR_ACCESS_KEY' />
						<label htmlFor='discussion'>I would like to discuss:</label>
						<Select id='discussion' name='discussion'>
							<option value='Research and Development'>
								Research and Development
							</option>
							<option value='Human Resource Development'>
								Human Resource Development
							</option>
							<option value='Information Technology (IT)'>
								Information Technology (IT)
							</option>
							<option value='Project Management'>Project Management </option>
							<option value='Architecture consultancy'>
								Architecture consultancy
							</option>
							<option value='Engineering consultancy'>
								Engineering consultancy
							</option>
							<option value='Quality Survey consultancy'>
								Quality Survey consultancy
							</option>
						</Select>
						<label htmlFor='first-name'>First name</label>
						<input type='text' id='first-name' name='first-name' required />
						<label htmlFor='phone'>Phone number</label>
						<input type='text' id='phone' name='phone' required />
						<button type='submit' className='btn' disabled={isSubmitting}>
							Call me back
						</button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default RequestCallback;
