import { useState } from 'react';
import Card from '../../common/Card';
import EventRegistrationForm from './EventRegistrationForm';
import Button from '../../forms/input/Button';

const EventCard = ({ event }) => {
    const [openForm, setOpenForm] = useState(false);

    // TODO #5b: Move four helper functions to Event class
    // TODO #5c: Refactor JSX below to reference them as methods of event object

    const getImageURL = () => {
        return 'https://i.ibb.co/' + event.imageId;
    };

    const getFormattedDate = () => {
        let lang = 'en-US';
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return new Date(event.date).toLocaleDateString(lang, options);
    };

    const getFormattedTime = () => {
        let lang = 'en-US';
        let options = {
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(event.date).toLocaleTimeString(lang, options);
    };

    const getTicketPrice = () => {
        return event.ticketPrice ? `$${event.ticketPrice}.00` : 'Free';
    };

    const handleToggleForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <Card>
            <img
                className="event-card-image"
                src={getImageURL()}
                alt={'Attendees at a gallery event'}
            />
            <div>
                <h5>{event.title}</h5>
                <h6>{event.subtitle}</h6>
                <p>{event.description}</p>
            </div>
            {event.bio && (
                <div>
                    <h6>Artist Bio</h6>
                    <p>{event.bio}</p>
                </div>
            )}
            <div className="date-time-price">
                <div className="date">{getFormattedDate()}</div>
                <div className="time">{getFormattedTime()}</div>
                <div className="price">{getTicketPrice()}</div>
            </div>
            <div className="criteria">{event.criteria}</div>
            {openForm ? (
                <EventRegistrationForm event={event} handleCloseForm={handleToggleForm} />
            ) : (
                <div className="register-button-container">
                    <Button
                        id={`register-event-${event.id}`}
                        type="button"
                        label="Register"
                        handleClick={handleToggleForm}
                    />
                </div>
            )}
        </Card>
    );
};

export default EventCard;
