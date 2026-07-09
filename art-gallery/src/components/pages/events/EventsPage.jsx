import EventCard from './EventCard.jsx';

// TODO #7a: Receive isLoading as prop from App.jsx
// TODO #7c: Receive eventsError as prop from App.jsx

const EventsPage = ({ events }) => {
    // TODO #7b: Add logic to return LoadingPage if data is not yet available
    //  (Test visually by passing down an empty array for events in App.jsx 
    //  since routing is not yet in place.)
    // TODO #7d: Add logic to return ErrorPage if eventsError has a message
    //  Include message in a <p> and a GoBack control that sends user to Home
    //  (use setCurrentPage since routing is not yet in place).

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
