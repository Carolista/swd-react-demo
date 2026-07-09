import EventCard from './EventCard.jsx';
import LoadingPage from '../LoadingPage.jsx';

const EventsPage = ({ isLoading, events, eventsError }) => {
    if (isLoading) {
        return <LoadingPage dataName="events" />;
    } else if (eventsError) {
        return (
            <main className="main-content">
                <h1>Upcoming Events</h1>
                <p>{eventsError}</p>
            </main>
        );
    } else {
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
    }
};

export default EventsPage;
