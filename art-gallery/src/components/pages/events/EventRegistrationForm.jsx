import { useState } from 'react';
import InputErrorMessage from '../../forms/input/InputErrorMessage';
import Button from '../../forms/input/Button';
import Spacer from '../../common/Spacer';
import FormItem from '../../forms/FormItem';
import Input from '../../forms/input/Input';

const initialData = {
    eventId: null,
    firstName: '',
    lastName: '',
    email: '',
    numberOfGuests: 0,
};

const errorMessages = {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required.',
    emailRequired: 'Email is required.',
    numberOfGuestsRequired: 'At least 1 guest required.',
};

const EventRegistrationForm = ({ event, handleCloseForm }) => {
    const [data, setData] = useState({...initialData, eventId: event.id});
    const [hasErrors, setHasErrors] = useState(false);

    // TODO #8a: Add a ref to make sure firstName field is focused upon mounting

    const isValid = () => {
        return data.firstName && data.lastName && data.email && data.numberOfGuests;
    };

    const handleDataChange = (domEvent) => {
        const { id, value } = domEvent.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (domEvent) => {
        domEvent.preventDefault();
        if (!isValid()) {
            setHasErrors(true);
        } else {
            // Eventually: submit data to back end to save to database
            handleCloseForm();
        }
    };

    return (
        <>
            <h4>Register for This Event</h4>
            <h5 className="event-registration-event-title">
                {event.title}: {event.subtitle}
            </h5>
            <Spacer marginY="10px" />
            <form className="register-form-grid">
                <FormItem classes="first-name-item">
                    {/* TODO #8d: Pass ref down to this input only */}
                    <Input
                        id="firstName"
                        label="First Name"
                        type="text"
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
                    <Input
                        id="lastName"
                        label="Last Name"
                        type="text"
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
                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
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
                    <Input
                        id="numberOfGuests"
                        label="Number of Guests"
                        type="number"
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
