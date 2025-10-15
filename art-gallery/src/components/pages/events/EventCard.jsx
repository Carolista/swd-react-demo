import { useState } from 'react';
import Card from '../../common/Card';
import EventRegistrationForm from './EventRegistrationForm';
import Button from '../../forms/input/Button';

const EventCard = ({ event }) => {
    const [openForm, setOpenForm] = useState(false);

    const handleToggleForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <Card>
            <img
                className="event-card-image"
                src={event.getImageURL()}
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
                <div className="date">{event.getFormattedDate()}</div>
                <div className="time">{event.getFormattedTime()}</div>
                <div className="price">{event.getTicketPrice()}</div>
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
