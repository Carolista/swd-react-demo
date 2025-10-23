import { useEffect, useRef, useState } from 'react';
import InputErrorMessage from '../../forms/input/InputErrorMessage';
import Input from '../../forms/input/Input';
import Button from '../../forms/input/Button';
import Spacer from '../../common/Spacer';
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
    const [data, setData] = useState({...initialData, eventId: event.id});
    const [hasErrors, setHasErrors] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const isValid = () => {
        return data.firstName && data.lastName && data.email && data.numberOfGuests;
    };

    const handleDataChange = (ev) => {
        let updatedData = {
            ...data,
            [ev.target.id]: ev.target.value,
        };
        setData(updatedData);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
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
            <h6>
                {event.title}: {event.subtitle}
            </h6>
            <Spacer marginY="10px" />
            <form className="register-form-grid">
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
