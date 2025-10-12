import { useState } from 'react';
import { useNavigate } from 'react-router';
import InputErrorMessage from './input/InputErrorMessage';
import TextInput from './input/TextInput';
import Button from './input/Button';
import NumberInput from './input/NumberInput';

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

const EventRegistrationForm = () => {
	const [data, setData] = useState(initialData);
	const [hasErrors, setHasErrors] = useState(false);

	const navigate = useNavigate();

	const handleDataChange = event => {
		let updatedData = {
			...data,
			[event.target.id]: event.target.value,
		};
		setData(updatedData);
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!firstName || !lastName || !email || !numberOfGuests) {
			setHasErrors(true);
		} else {
			navigate('/events');
		}
	};

	// FIXME: This form uses a lot of Bootstrap classes
    
	return (
		<>
			<h3>Register for an Event</h3>
			<form>
				<div className="container">
					<div className="row">
						<div className="form-item col-8">
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
						<div className="form-item col-8">
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
					<div className="row">
						<div className="form-item col-8">
							<TextInput
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
						<div className="form-item col-8">
							<NumberInput
								id="numberOfGuests"
								label="Number of Guests Attending"
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

				<Button
					id="event-registration-button"
					type="submit"
					label="Complete Registration"
					handleClick={handleSubmit}
				/>
			</form>
		</>
	);
};

export default EventRegistrationForm;
