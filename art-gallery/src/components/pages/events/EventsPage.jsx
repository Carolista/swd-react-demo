import EventCard from './EventCard.jsx';

const EventsPage = ({ events }) => {
    let eventsJSX = events.map((event) => {
        return <EventCard key={event.id} event={event} />;
    });
    return (
        <main className="main-content">
            <h1>Upcoming Events</h1>
            {events.length ? (
                <div className="event-card-container">{eventsJSX}</div>
            ) : (
                <p>
                    <em>We're sorry, there are no events to display at this time.</em>
                </p>
            )}
        </main>
    );
};

export default EventsPage;
