import { useState } from 'react';
import InputErrorMessage from './input/InputErrorMessage';
import TextInput from './input/TextInput';
import Button from './input/Button';
import NumberInput from './input/NumberInput';
import Spacer from '../common/Spacer';
import Email from './input/Email';

let initialData = {
	eventId: null,
	firstName: '',
	lastName: '',
	email: '',
	numberOfGuests: 0,
};

let errorMessages = {
	firstNameRequired: 'First name is required.',
	lastNameRequired: 'Last name is required.',
	emailRequired: 'Email is required.',
	numberOfGuestsRequired: 'The number of guests must be at least 1.',
};

const EventRegistrationForm = ({ event, handleCloseForm }) => {
	const [data, setData] = useState(initialData);
	const [hasErrors, setHasErrors] = useState(false);

	const isValid = () => {
		return data.firstName && data.lastName && data.email && data.numberOfGuests;
	};

	const handleDataChange = event => {
		let updatedData = {
			...data,
			[event.target.id]: event.target.value,
		};
		setData(updatedData);
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!isValid()) {
			setHasErrors(true);
		} else {
			handleCloseForm();
		}
	};

	// FIXME: Redo layout and ensure it works with media queries

	return (
		<>
			<h3>RESERVE YOUR TICKETS</h3>
			<h5>
				{event.title}: {event.subtitle}
			</h5>

			<form>
				<div>
					<div>
						<div className="form-item">
							<TextInput
								id="firstName"
								label="First Name"
								value={data.firstName}
								handleChange={handleDataChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && data.firstName === ''}
								msg={errorMessages['firstNameRequired']}
							/>
						</div>
						<div className="form-item">
							<TextInput
								id="lastName"
								label="Last Name"
								value={data.lastName}
								handleChange={handleDataChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && data.lastName === ''}
								msg={errorMessages['lastNameRequired']}
							/>
						</div>
					</div>
					<div>
						<div className="form-item">
							<Email
								id="email"
								label="Email Address"
								value={data.email}
								handleChange={handleDataChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && data.email === ''}
								msg={errorMessages['emailRequired']}
							/>
						</div>
						<div className="form-item">
							<NumberInput
								id="numberOfGuests"
								label="Number of Tickets"
								value={data.numberOfGuests}
								handleChange={handleDataChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && data.numberOfGuests === 0}
								msg={errorMessages['numberOfGuestsRequired']}
							/>
						</div>
					</div>
				</div>

				<div className="register-button-container">
					<Button
						id={`cancel-button-event-${event.id}`}
						type="button"
						label="Cancel"
						classes="cancel"
						handleClick={handleCloseForm}
					/>
					<Spacer marginX="4px" />
					<Button
						id="event-registration-button"
						type="submit"
						label="Complete Registration"
						handleClick={handleSubmit}
					/>
				</div>
			</form>
		</>
	);
};

export default EventRegistrationForm;
