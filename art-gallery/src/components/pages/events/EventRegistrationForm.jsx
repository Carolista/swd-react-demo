import { useState } from 'react';
import InputErrorMessage from '../../forms/input/InputErrorMessage';
import TextInput from '../../forms/input/TextInput';
import Button from '../../forms/input/Button';
import NumberInput from '../../forms/input/NumberInput';
import Spacer from '../../common/Spacer';
import Email from '../../forms/input/Email';
import FormItem from '../../forms/FormItem';

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

	return (
		<>
			<h3>REGISTER FOR THIS EVENT</h3>
			<h5>
				{event.title}: {event.subtitle}
			</h5>
			<Spacer marginY="10px" />
			<form className="register-form-grid">
				<FormItem classes="first-name-item">
					<TextInput
						id={`first-name-${event.id}`}
						label="First Name"
						value={data.firstName}
						handleChange={handleDataChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && data.firstName === ''}
						msg={errorMessages['firstNameRequired']}
					/>
				</FormItem>
				<FormItem classes="last-name-item">
					<TextInput
						id={`last-name-${event.id}`}
						label="Last Name"
						value={data.lastName}
						handleChange={handleDataChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && data.lastName === ''}
						msg={errorMessages['lastNameRequired']}
					/>
				</FormItem>
				<FormItem classes="email-item">
					<Email
						id={`email-${event.id}`}
						classes="email"
						label="Email Address"
						value={data.email}
						handleChange={handleDataChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && data.email === ''}
						msg={errorMessages['emailRequired']}
					/>
				</FormItem>
				<FormItem classes="number-of-guests-item">
					<NumberInput
						id={`number-of-guests-${event.id}`}
						label="Number of Guests"
						value={data.numberOfGuests}
						handleChange={handleDataChange}
					/>
					<InputErrorMessage
						hasError={hasErrors && data.numberOfGuests === 0}
						msg={errorMessages['numberOfGuestsRequired']}
					/>
				</FormItem>
				<Button
					id={`cancel-button-${event.id}`}
					type="button"
					label="Cancel"
					classes="cancel cancel-register-button"
					handleClick={handleCloseForm}
				/>
				<Button
					id={`submit-button-${event.id}`}
					type="submit"
					label="Reserve Tickets"
					classes="submit-register-button"
					handleClick={handleSubmit}
				/>
			</form>
		</>
	);
};

export default EventRegistrationForm;
