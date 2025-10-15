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
    numberOfGuestsRequired: 'At least 1 guest required.',
};

const EventRegistrationForm = ({ event, handleCloseForm }) => {
    const [data, setData] = useState(initialData);
    const [hasErrors, setHasErrors] = useState(false);

    const isValid = () => {
        return data.firstName && data.lastName && data.email && data.numberOfGuests;
    };

    const handleDataChange = (event) => {
        let updatedData = {
            ...data,
            [event.target.id]: event.target.value,
        };
        setData(updatedData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValid()) {
            setHasErrors(true);
        } else {
            handleCloseForm();
        }
    };

    return (
        <>
            <h4>Register for This Event</h4>
            <h6>
                {event.title}: {event.subtitle}
            </h6>
            <Spacer marginY="10px" />
            <form className="register-form-grid">
                <FormItem classes="first-name-item">
                    <TextInput
                        id="firstName"
                        label="First Name"
                        value={data.firstName}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.firstName === ''}
                        msg={errorMessages['firstNameRequired']}
                    />
                </FormItem>
                <FormItem classes="last-name-item">
                    <TextInput
                        id="lastName"
                        label="Last Name"
                        value={data.lastName}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.lastName === ''}
                        msg={errorMessages['lastNameRequired']}
                    />
                </FormItem>
                <FormItem classes="email-item">
                    <Email
                        id="email"
                        classes="email"
                        label="Email Address"
                        value={data.email}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.email === ''}
                        msg={errorMessages['emailRequired']}
                    />
                </FormItem>
                <FormItem classes="number-of-guests-item">
                    <NumberInput
                        id="numberOfGuests"
                        label="Number of Guests"
                        value={data.numberOfGuests}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && data.numberOfGuests === 0}
                        msg={errorMessages['numberOfGuestsRequired']}
                    />
                </FormItem>
                <Button
                    id={`cancel-event-${event.id}`}
                    type="button"
                    label="Cancel"
                    classes="cancel cancel-register-button"
                    handleClick={handleCloseForm}
                />
                <Button
                    id={`submit-event-${event.id}`}
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
