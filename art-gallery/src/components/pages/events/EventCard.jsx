import { useState } from 'react';
import Card from '../../common/Card';
import EventRegistrationForm from './EventRegistrationForm';
import Button from '../../forms/input/Button';

const EventCard = ({ event }) => {
    const [openForm, setOpenForm] = useState(false);

    const handleToggleForm = () => {
        setOpenForm((prevOpenForm) => !prevOpenForm);
    };

    return (
        <Card>
            <img
                className="event-card-image"
                src={event.getImageURL()}
                alt={'Attendees at a gallery event'}
            />
            <div>
                <h3 className="event-card-title">{event.title}</h3>
                <h4 className="event-card-subtitle">{event.subtitle}</h4>
                <p>{event.description}</p>
            </div>
            {event.bio && (
                <div>
                    <h4 className="event-card-bio-heading">Artist Bio</h4>
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
