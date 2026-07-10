import Card from '../../common/Card';

// TODO #1: Create reusable form components in src/components/forms and src/components/forms/input
// TODO #2a: Create src/components/forms/forms.css and add CSS

// TODO #5: Create src/components/pages/events/EventRegistrationForm using the input components

const EventCard = ({ event }) => {
    // TODO #3: Create a state variable named openForm (boolean)

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

    // TODO #4: Create a handler that toggles openForm

    return (
        <Card>
            <img
                className="event-card-image"
                src={getImageURL()}
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
                <div className="date">{getFormattedDate()}</div>
                <div className="time">{getFormattedTime()}</div>
                <div className="price">{getTicketPrice()}</div>
            </div>
            <div className="criteria">{event.criteria}</div>
            {/* TODO #6: Display the button to open the form when openForm is false */}
            {/* TODO #7: Display the form when openForm is true and pass down the handler */}
        </Card>
    );
};

export default EventCard;
