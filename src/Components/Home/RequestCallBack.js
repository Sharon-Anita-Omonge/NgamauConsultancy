import React from "react";
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
	return (
		<div className='main-callback'>
			<div className='callback container'>
				<div className='callback-left '>
					<h2>
						<span style={{ color: "var(--blue" }}>REQUEST</span> A CALL BACK.
					</h2>
					<p>
						Would you like to speak to one of our advisers over the phone? Just
						submit your details and we’ll be in touch shortly. You can also
						email us if you would prefer.
					</p>
				</div>
				<div className='callback-right'>
					<Form>
						<label htmlFor='discussion'>I would like to discuss:</label>
						<Select id='discussion' name='discussion'>
							<option value='business-planning'>
								Research and Development
							</option>
							<option value='financial-advice'>
								Human Resource Development
							</option>
							<option value='investment'>Information Technology (IT)</option>
							<option value='investment'>Project Management </option>
							<option value='investment'>Architecture consultancy</option>
							<option value='investment'>Engineering consultancy</option>
							<option value='investment'>Quality Survey consultancy</option>
						</Select>
						<label htmlFor='first-name'>First name</label>
						<input type='text' id='first-name' name='first-name' required />
						<label htmlFor='phone'>Phone number</label>
						<input type='text' id='phone' name='phone' required />
						<button type='submit' className='btn'>
							Call me back
						</button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default RequestCallback;
