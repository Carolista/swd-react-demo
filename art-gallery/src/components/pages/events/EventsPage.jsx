import { mockEvents as events } from '../../../test-data/mockEvents.js'
import EventCard from './EventCard.jsx';

const EventsPage = () => {

    let eventsJSX = events.map(event => {
        return <EventCard key={event.id} event={event} />
    });

    // TODO: Make cards clickable and go to registration page where select autofills based on id param
    
    return (
        <main className="main-content">
            <h1>Upcoming Events</h1>
				{events.length ? (
                    <>
                        <h2>Click here to register for an event</h2>
					    <div className="event-card-container">{eventsJSX}</div>
                    </>
				) : (
					<p>
						<em>We're sorry, there are no events to display at this time.</em>
					</p>
				)}
        </main>
    )
}

export default EventsPage;
