import Card from '../../common/Card';

// TODO #1: Create reusable components for FormItem, Input, InputErrorMessage, and Button
// TODO #2a: Create forms.css and add CSS

// TODO #5: Create EventRegistrationForm using input components

const EventCard = ({ event }) => {
    // TODO #3: Create a state variable, openForm (boolean)

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

    // TODO #4: Create handler that toggles openForm

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
            {/* TODO #6: Display button to open form if not open */}
            {/* TODO #7: Display form if open and pass down handler */}
        </Card>
    );
};

export default EventCard;
