import { useEffect, useRef, useState } from 'react';
import InputErrorMessage from '../../forms/input/InputErrorMessage';
import Input from '../../forms/input/Input';
import Button from '../../forms/input/Button';
import Spacer from '../../common/Spacer';
import FormItem from '../../forms/FormItem';

const initialData = {
    eventId: null,
    firstName: '',
    lastName: '',
    email: '',
    numberOfGuests: '',
};

const errorMessages = {
    firstNameRequired: 'First name is required.',
    lastNameRequired: 'Last name is required.',
    emailRequired: 'Email is required.',
    numberOfGuestsRequired: 'At least 1 guest required.',
};

const EventRegistrationForm = ({ event, handleCloseForm }) => {
    const [data, setData] = useState({ ...initialData, eventId: event.id });
    const [hasErrors, setHasErrors] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const isValid = () => {
        return (
            data.firstName.trim() !== '' &&
            data.lastName.trim() !== '' &&
            data.email.trim() !== '' &&
            Number(data.numberOfGuests) >= 1
        );
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
            <form className="register-form-grid" onSubmit={handleSubmit}>
                <FormItem classes="first-name-item">
                    <Input
                        id="firstName"
                        label="First Name"
                        value={data.firstName}
                        ref={inputRef}
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
                        classes="email"
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
                        min="1"
                        value={data.numberOfGuests}
                        required={true}
                        handleChange={handleDataChange}
                    />
                    <InputErrorMessage
                        hasError={hasErrors && Number(data.numberOfGuests) < 1}
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
                />
            </form>
        </>
    );
};

export default EventRegistrationForm;
